import React, { useState, useEffect } from "react";
import Button from "../Button";
import Link from "../Link";
import Cover from "../TrackCover";
import style from './style.module.css';

  const TrackList = props =>{
    const {track, handleSelect} = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
      handleSelect(track.uri)
      setIsSelected(!isSelected)
    }

    useEffect(() => props.isSelected && setIsSelected(true), [])


    const artistName = track.artists.map((artist, idx) => {
      const isLast = idx === track.artists.length - 1;
      const txt = isLast ? artist.name : artist.name + ",";
      return (
          <Link href={artist.external_urls.spotify} key={idx}> {txt}</Link>
      );


  }); 
    return (
      <table className={style.trackList} >
          <tbody>
              <tr>
                <td ><Cover imageUrl={track.album.images[0].url} alt={track.album} /></td>
                <td >
                  <p className={style.title}>{track.name}</p>
                  <p className={style.artist}> {artistName} </p>
                </td>
                <td className={style.trackDetail}>
                  <p className={style.album}>{track.album.name}</p>
                </td>
                <td className={style.btnSelect}>
                  <Button 
                      type="button"
                      buttonStyle={isSelected ? "btn--primary--outline" : "btn--primary--solid"}
                      buttonSize="btn--small" 
                      onClick={handleClick}>
                        {isSelected ? "Selected" : "Select"}
                    </Button>
                </td>  
            </tr>
          </tbody>
      </table>

    );
};

export default TrackList;
