import React from 'react';
import './style.css';

const Track = ({data}) =>  {
    const { name, album, artists} = data;
    const artistTxt = artists.map((artist, idx) => {
        const isLast = idx === artists.length - 1;
        const txt = isLast ? artist.name : artist.name + ",";
        return (
            <a href={artist.external_urls.spotify} key={idx}>{txt}</a>
        );
    });

    return (
        <div>
            <div className="cover">
                <img
                    src={album.images[0].url}
                    alt={album.name}
                />
            </div>  
            <div className="desc">
                <h2>{name}</h2>
                <p>{artistTxt}</p>
                <p><a href={album.external_urls.spotify}>{album.name}</a></p>
            </div>

        </div>
        
        
        
    );
};

export default Track;