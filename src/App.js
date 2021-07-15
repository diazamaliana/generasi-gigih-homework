import './App.css';

//import Component
import Button from "./components/Button";
import Card from "./components/Card";
import Track from "./components/Track";

//import Data
import data from "./data/Track";

function App() {
  return (
    <div className="App">
      <h1  style={{ textAlign: "Center", fontFamily:"Montserrat" }}>Create Playlist</h1>
      <div className="song-wrapper">
          <Card>
              <Track data={data}/>
              <Button 
                onClick={ () => {alert("You clicked on Me!")}}
                type="button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"> 
              SELECT 
              </Button>
          </Card>
      </div>
      
    </div>
  );
}

export default App;
