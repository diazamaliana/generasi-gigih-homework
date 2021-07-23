//import Component
import Button from "../Button";
import Link from "../Link";
import Card from "../Card";
import Cover from "../TrackCover";
import Style from './style.module.css';

  const TrackList = ({data, isSelected, handleSelect})=>{
    const {id, name, artists, album} = data;

    const artistName = artists.map((artist, idx) => {
      const isLast = idx === artists.length - 1;
      const txt = isLast ? artist.name : artist.name + ",";
      return (
          <Link href={artist.external_urls.spotify} key={idx}> {txt}</Link>
      );
  }); 
    return (
      <Card key={id}>
        <Cover imageUrl={album.images[0].url} alt={album} />
        <h2 className={Style.Title}>{name}</h2>

        <p className={Style.Artist}>
            <Link href={artists.external_urls}> {artistName} </Link>  
        </p>

        <p className={Style.Album}>
          <Link href={album.external_urls.spotify}>{album.name}</Link>
        </p>

        <Button 
          type="button"
          buttonStyle={isSelected ? "btn--primary--outline" : "btn--primary--solid"}
          buttonSize="btn--small" 
          onClick={()=> handleSelect(data.uri)}>
            {isSelected ? "Selected" : "Select"}
        </Button>

      </Card>
    );
};

export default TrackList;
