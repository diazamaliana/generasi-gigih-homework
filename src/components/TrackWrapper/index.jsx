import React from 'react';
import Style from './style.module.css';
import TrackList from '../TrackList';
//import { useTrack } from '../../config/getSelectedTrack';


const TrackWrapper = ({ tracks, handleSelect, selectedTracks }) => {
  
    return(
        <div>
          <div className={Style.TrackWrapper}>
          {tracks && tracks.map((track) => (
              <TrackList
                key={track.id}
                track={track}
                handleSelect={handleSelect}
                selectedTracks={selectedTracks}
                isSelected={selectedTracks.includes(track.uri)}
            />
          ))}
          </div>
        </div>    
    )
}

export default TrackWrapper;