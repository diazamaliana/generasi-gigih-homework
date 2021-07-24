  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
  const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;
  const SPACE_DELIMITER = "%20";
  
  const redirect = () => {
    const SCOPES = [
      "user-read-private",
      "playlist-modify-private",
      "user-read-email",
    ];
    const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
    
    let url = `${SPOTIFY_AUTHORIZE_ENDPOINT}`;
    url += "?response_type=token";
    url += `&client_id=${CLIENT_ID}`;
    url += `&scope=${SCOPES_URL_PARAM}`;
    url += `&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}`;
    ;
    //redirect...
    window.location = url;
  };

export { redirect };

//source : https://github.com/spotify/web-api-auth-examples/blob/master/implicit_grant/public/index.html

  
