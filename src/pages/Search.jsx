import { useEffect, useState } from "react";
import { callback } from "../config/getHashParams";
import TrackWrapper from "../components/TrackWrapper";
import Navbar from "../components/Navbar";
import data from "../data/Track";
import { getProfile, getSearchTrack } from "../config/apiEndpointSpotify";

const Search = () => {

  const [trackList, setTrackList] = useState(data);
  const [loginAuth, setLoginAuth] = useState(false);
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    const payload = callback();
    if (payload) {
      setLoginAuth(payload);
      getProfile(payload.access_token).then((res) => {
        setUserData(res);
      });
    }
  }, []);

   const handleSearch = (query) => {
     const options = {
       q: query,
       type: "track",
       limit: 20,
     };
    getSearchTrack(loginAuth.access_token, options).then((res) => {
       setTrackList(res.tracks.items);
     });
   };

  return (

    <div className="App">
      <Navbar  userData={{ ...userData, ...loginAuth }}  handleSearch={handleSearch} />
      <h1 style={{color: "white"}} >Create Playlist</h1>
      <TrackWrapper data={trackList}/>
    </div>
  );

}

export default Search;