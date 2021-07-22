import React from 'react';
import Style from './style.module.css';
import TrackList from '../TrackList';
import { useTrack } from '../../config/selectTrack';


const TrackWrapper = ({ data }) => {
    const {checkSelected, handleSelect} = useTrack();
    return(
        <div>
          <div className={Style.TrackWrapper}>
          {data.map((track) => (
              <TrackList
                key={track.id}
                data={track}
                handleSelect={handleSelect}
                isSelected={checkSelected(track.uri)}
            />
          ))}
          </div>
        </div>    
    )
}

export default TrackWrapper;