import React from "react";
import Button from "../Button";
import Link from "../Link";
import Cover from "../TrackCover";
import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedTracks, removeSelectedTracks } from "../../redux/store/playlist";


const TrackList = ({ track }) =>{
    const dispatch = useDispatch();

    const selectedTracks = useSelector(state => state.playlist.selectedTracks)
    const isSelected = selectedTracks.includes(track.uri);

    const handleClick = () => {
      if (isSelected) {
        dispatch(removeSelectedTracks(track.uri))
      } else {
        dispatch(addSelectedTracks(track.uri))
      }
    }

    const artistName = track.artists.map((artist, idx) => {
      const isLast = idx === track.artists.length - 1;
      const txt = isLast ? artist.name : artist.name + ",";
      return (
          <Link href={artist.external_urls.spotify} key={idx}> {txt}</Link>
      );
  });

    return (
      <div className={style.wrapper}>
          <div className={style.container}>
              <div className={style.cover}>
                  <Cover data-testid="album-cover" imageUrl={track.album.images[2].url} alt={track.album.name} />
              </div>
              <div className={style.trackTitle}>
                  <p data-testid="track-name" className={style.title}>{track.name}</p>
                  <p data-testid="artist-name" className={style.artist}> {artistName} </p>
              </div>
              <div className={style.trackAlbum}>
                  <p data-testid="album-name" className={style.album}>{track.album.name}</p>
              <Button 
                type="button"
                buttonStyle={isSelected ? "btn--primary--outline" : "btn--primary--solid"}
                buttonSize="btn--small" 
                onClick={handleClick}>
                {isSelected ? "Selected" : "Select"}      
               </Button>
              </div>            
        </div>
      </div>
    );
};

export default TrackList;
