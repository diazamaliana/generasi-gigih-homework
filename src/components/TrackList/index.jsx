//import Component
import Button from "../Button";
import Card from "../Card";
//import TrackDescription from "./TrackDescription";
import Cover from "../TrackCover";
import Style from './style.module.css';


//import Data
//import data from "../data/Track";

//function Tracks(){
  //   const track = (data) => {
  //     const {
  //       album: {
  //         images: [thumbnail],
  //         artists: [artist],
  //         external_urls: urlAlbum,
  //         name: album,
  //       },
  //       external_urls: urlTrack,
  //       name: title,
  //       id,
  //     } = data;
    
  //     return { id, title, artist, album, thumbnail, urlAlbum, urlTrack };
  // };

  const TrackList = ({data})=>{
    const {id, name, artists, album, external_urls} = data;

    const artistName = artists.map((artist, idx) => {
      const isLast = idx === artists.length - 1;
      const txt = isLast ? artist.name : artist.name + ",";
      return (
          <a href={artist.external_urls.spotify} key={idx}> {txt}</a>
      );
  }); 
    // const { id, title, artist, album, thumbnail, urlAlbum, urlTrack  } = track(trackContent);
    return (
      <Card key={id}>
        <Cover imageUrl={album.images[0].url} alt={album} />
        <h2 className={Style.Title}>{name}</h2>

        <div className={Style.Desc}>
            <p className={Style.Artist} ><a href={artists.external_urls}>{artistName} </a></p>  
            <p className={Style.Album}><a href={album.external_urls.spotify}>{album.name}</a></p>
        </div>

        <Button 
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium" 
          onClick={()=> window.open(external_urls.spotify)}>Select</Button>
      </Card>
    );
};

export default TrackList;
