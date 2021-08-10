import React from 'react';
import Cover from 'components/TrackCover';
import './styles.css';

export interface ICard {
  id: number,
  alt : string,
  title: string,
  artist: string,
  imageUrl: string,
  onClick?: () => void
}

const Card = ({title, artist, alt, imageUrl, onClick} : ICard) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__thumbnail"  data-testid="card-thumbnail">
        <Cover imageUrl={imageUrl} alt={alt} />
      </div>
      <div className="card__content">
        <div className="card__wrapper">
          <h3 className="card__title">{title}</h3>
          <span className="card__artist">{artist}</span>
        </div>
      </div>
    </div>
  )
}

export default Card