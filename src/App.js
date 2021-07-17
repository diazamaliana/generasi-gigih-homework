import './App.css';
import Tracks from "./Tracks.jsx";

function App() {
 
  return (

    <div className="App">
      <h1  style={{ textAlign: "Center", fontFamily:"Montserrat" }}>Create Playlist</h1>
      <div className="song-wrapper">
          <Tracks/>
      </div>
      
    </div>
  );
}

export default App;
