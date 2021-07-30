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
      </div>
    );
};

export default TrackList;
