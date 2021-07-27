import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlaylistForm from "../components/PlaylistForm";
import Navbar from "../components/Navbar";
import { useSpotifyAuth } from "../config/useSpotifyApi";
import Login from "./Login";
import TrackWrapper from "../components/TrackWrapper";
import data from "../data/Track";
import { getProfile, getSearchTrack, createPlaylist, addTrackToPlaylist } from "../config/spotifyEndpoint";
import { useSelector, useDispatch } from 'react-redux';
import { storeUser } from "../redux/store/userAuth";


const Search = () => {
    const loginAuth = useSpotifyAuth();

    return loginAuth.isAuth ? (
      <AuthUser accessToken={loginAuth.access_token} />
    ) : (
      <div style={{ textAlign: "center" }}>
          <p>Welcome to GG Music Player</p>
          <Login /> 
      </div>
    )
}


const AuthUser = props => {
    const user = useSelector(state => state.userAuth.user);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [trackList, setTrackList] = useState(data);
    const [selectedTracks, setSelectedTracks] = useState([]);
    //const [userId, setUserId] = useState('')
    const [form, setForm] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    getProfile(props.accessToken).then(user => dispatch(storeUser(user)))
  }, [])
  
    const handleSearch = query => {
      setIsLoading(true)
      getSearchTrack(props.accessToken, {
        query,
        type: 'track',
        limit: 12,
      }).then(res => {
        setTrackList(res.tracks.items)
        setIsLoading(false)
      })
    }


  const handleSubmit = e => {
      e.preventDefault()
      if (selectedTracks.length > 0){
          createPlaylist(props.accessToken, user.id, {
          name: form.title,
          description: form.description,
          public: false,
        }).then(playlist => {
          return addTrackToPlaylist(props.accessToken, playlist.id, {
            uris: selectedTracks
          })
        }).then(() => {
          setSelectedTracks([])
          alert('Playlist created')
        })
      } else {
        alert ('Please selected some track to make a playlist!')
      }
     
  }

  const handleFormChanges = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

    const handleSelect = uri => {
        if (selectedTracks.includes(uri)) {
          let newTracks = selectedTracks.filter(track => track !== uri)
          setSelectedTracks(newTracks)
        } else {
          setSelectedTracks([...selectedTracks, uri])
        }
      }
    

    return (
    <div>
        <Navbar />
        <>
          <PlaylistForm
            form={form}
            handleSubmit={handleSubmit}
            handleFormChanges={handleFormChanges}
          />
        </>
        <SearchBar handleSearch = {handleSearch} />
        {isLoading ? (
            <p>Loading...</p>
        ) : (
        <TrackWrapper
            handleSelect={handleSelect}
            selectedTracks={selectedTracks} 
            tracks={trackList}/>
        )}  
    </div>
    ) 
}
export default Search;
