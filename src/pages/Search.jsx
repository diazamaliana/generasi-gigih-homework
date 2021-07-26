import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import PlaylistForm from "../components/PlaylistForm";
import Navbar from "../components/Navbar";
import { useSpotifyAuth } from "../config/useSpotifyApi";
import Login from "./Login";
import TrackWrapper from "../components/TrackWrapper";
import fetchSpotifyApi from "../config/fetchSpotifyApi";
import data from "../data/Track";

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
    const [isLoading, setIsLoading] = useState(false);
    const [trackList, setTrackList] = useState(data);
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [userId, setUserId] = useState('')
    const [form, setForm] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    async function fetchData() {
    const user = await fetchSpotifyApi(
      'https://api.spotify.com/v1/me',
      props.accessToken
    )
    setUserId(user.id)
    }
    fetchData()
  }, [])

  const createPlaylist = async () => {
    return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + props.accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.title,
        description: form.description,
        public: false,
      }),
    }).then(res => res.json())
  }

  
    const handleSearch = async query => {
      setIsLoading(true)
      const SEARCH_API_ENDPOINT = `https://api.spotify.com/v1/search`
      const SEARCH_TYPE = `track`
      const URL = `${SEARCH_API_ENDPOINT}?q=${query}&type=${SEARCH_TYPE}`
      const result = await fetchSpotifyApi(URL, props.accessToken)
      setTrackList(result.tracks.items)
      setIsLoading(false)
    }

    const addTrackToPlaylist = async id => {
    fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + props.accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        uris: selectedTracks
      }),
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const playlist = await createPlaylist()
    await addTrackToPlaylist(playlist.id)
    alert('Playlist created')
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
        <Navbar {...userId} />
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
