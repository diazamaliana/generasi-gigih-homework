import React from 'react';
import Style from './style.module.css'

const TrackDescription = ( props ) => {
  return (
    <div className={Style.Desc}>
        <p className={Style.Artist} ><a href={props.artistUrl}>{props.artistName} </a></p>  
        <p className={Style.Album}><a href={props.albumUrl}>{props.albumName}</a></p>
    </div>
   
    );
};

export default TrackDescription;