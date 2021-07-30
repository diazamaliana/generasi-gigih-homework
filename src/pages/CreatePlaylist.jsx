import { useState } from "react";
import PlaylistForm from "../components/PlaylistForm";
//import Navbar from "../components/Navbar";
import TrackList from "../components/TrackList";
import SearchBar from "../components/SearchBar";
import { getSearchTrack,  } from "../libraries/apiSpotify";
import { setTracks } from "../redux/store/playlist";
import { useSelector, useDispatch } from 'react-redux';

const CreatePlaylist= () => {
  const { accessToken } = useSelector(state => state.userAuth)
  const { tracks } = useSelector(state => state.playlist)
  const dispatch = useDispatch()
  
  const [isLoading, setIsloading] = useState(false)

  const handleSearch = (query) => {
      const options = {
        q: query,
        type: 'track',
        limit: 12,
      };
      setIsloading(true);
      getSearchTrack(accessToken, options).then((res) => {
        dispatch(setTracks(res.tracks.items));
        setIsloading(false);
      });
  };
    
    return (
    <div>
        <>
          <PlaylistForm />
        </>
        <SearchBar handleSearch = {handleSearch} />
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            tracks.map(track => (
            <TrackList track={track} key={track.id} />
            ))
        )}  
    </div>
    ) 
}

export default CreatePlaylist;

        