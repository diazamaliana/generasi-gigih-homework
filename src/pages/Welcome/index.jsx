import React from 'react';
import style from "./style.module.css";

const Welcome = () => {  
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
          <h1>Listening is everything</h1>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <a className={style.btn} href="https://www.spotify.com/us/download/windows/">GET SPOTIFY FREE</a>
      </div>
    </div>
  )
}

export default Welcome;