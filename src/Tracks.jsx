//import Component
import Button from "./components/Button";
import Card from "./components/Card";
import TrackDescription from "./components/TrackDescription";
import Cover from "./components/TrackCover";
import Title from "./components/TrackTitle";

//import Data
import data from "./data/Track";

function Tracks(){
    const track = (data) => {
      const {
        album: {
          images: [thumbnail],
          artists: [artist],
          external_urls: urlAlbum,
          name: album,
        },
        external_urls: urlTrack,
        name: title,
        id,
      } = data;
    
      return { id, title, artist, album, thumbnail, urlAlbum, urlTrack };
  };

  const trackContents = data.map((trackContent)=>{
    const { id, title, artist, album, thumbnail, urlAlbum, urlTrack  } = track(trackContent);
    return (
      <Card key={id}>
        <Cover imageUrl={thumbnail.url} alt={album} />
        <Title>{title}</Title>
        <TrackDescription 
          albumName={album}
          albumUrl= {urlAlbum.spotify}
          artistUrl = {artist.external_urls.spotify}
          artistName = {artist.name}></TrackDescription>

        <Button 
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium" 
          to={urlTrack.spotify}>Select</Button>
      </Card>
    );
  });
   return trackContents; 
};

export default Tracks;
