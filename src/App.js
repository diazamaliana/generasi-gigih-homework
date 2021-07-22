import './App.css';
import { useEffect, useState } from "react";
import { callback } from "./config/getLoginAuth";
import TrackWrapper from "./components/TrackWrapper";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import data from "./data/Track";
import { getProfile, getSearchTrack } from "./config/spotifyApiEndpoint";

function App() {
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
        <Heading> CreatePlaylist</Heading>
      <TrackWrapper data={trackList}/>
    </div>
  );
}

export default App;
