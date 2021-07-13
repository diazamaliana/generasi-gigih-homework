import './App.css';
import Playlist from "./components/Playlist";
import data from "./data/Playlist";

function App() {
  return (
    <div className="App">
      <h1 className="" style={{ textAlign: "Center" }}>Create Playlist</h1>
      <div className="song-wrapper">
          <Playlist data={data}/>
      </div>
    </div>
  );
}

export default App;
