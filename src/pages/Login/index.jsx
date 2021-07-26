import React from 'react';
import style from "./style.module.css";
import getLoginAuth from '../../config/getLoginAuth';
//import getReturnedParams from '../../config/getReturnedParams';

/* 
http://localhost:3000/dashboard#access_token=ABCqxL4Y&token_type=Bearer&expires_in=3600
*/

const Login = () => {
    const spotifyAuthUrl = getLoginAuth();

      const handleLoginButton = () => {
        window.location = `${spotifyAuthUrl}`;
      };
    
    return(
        <div className={style.login} >
            <button onClick={handleLoginButton} > Login with Spotify </button>
        </div>    
    )
}

export default Login;