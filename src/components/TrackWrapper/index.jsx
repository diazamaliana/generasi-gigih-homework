import React from 'react';
import Style from './style.module.css';
import TrackList from '../TrackList';


const TrackWrapper = ({ data }) => {
    return(
        <div>
          <div className={Style.TrackWrapper}>
          {data.map((track) => (
              <TrackList key={track.id} data={track}/>
          ))}
          </div>
        </div>    
    )
}

export default TrackWrapper;