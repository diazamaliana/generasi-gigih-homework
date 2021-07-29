import React from 'react';
import style from "./style.module.css";
import { useSpotifyAuth } from '../../libraries/useSpotifyAuth';
import { authorize } from '../../libraries/apiSpotify';



const Login = () => {
  const { isAuthenticated } = useSpotifyAuth()
    
  return isAuthenticated ? (
   
      <div style={{ textAlign: "center" }}>
          <p> Welcome to GG Music Player </p>
      </div>
    ) : (
        <div className={style.login} >
            <button onClick={authorize} > Login with Spotify </button>
        </div>    
  )
}

export default Login;