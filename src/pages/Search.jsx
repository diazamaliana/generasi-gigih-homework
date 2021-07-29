import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlaylistForm from "../components/PlaylistForm";
import Navbar from "../components/Navbar";
import { useSpotifyAuth } from "../libraries/useSpotifyAuth";
import TrackList from "../components/TrackList";
import data from "../data/Track";
import { getProfile, getSearchTrack, createPlaylist, addTrackToPlaylist } from "../libraries/apiSpotify";
import { useSelector, useDispatch } from 'react-redux';
import { storeUser } from "../redux/store/userAuth";


const Search = () => {
  const user = useSelector(state => state.userAuth.user)
  const dispatch = useDispatch()

  const { isAuthenticated, accessToken } = useSpotifyAuth()

  const [trackList, setTrackList] = useState(data)
  const [selectedTracks, setSelectedTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    if (isAuthenticated) {
      getProfile(accessToken).then(user => dispatch(storeUser(user)))
    }
  }, [isAuthenticated, accessToken])
  
    const handleSearch = (query) => {
      setIsLoading(true)
      getSearchTrack(accessToken, {
        q : query,
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
          createPlaylist(accessToken, user.id, {
          name: form.title,
          description: form.description,
          public: false,
        }).then(playlist => {
          return addTrackToPlaylist(accessToken, playlist.id, {
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
        <TrackList
            handleSelect={handleSelect}
            selectedTracks={selectedTracks} 
            tracks={trackList}/>
        )}  
    </div>
    ) 
}

export default Search;
