  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // insert your client id here from spotify
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



const callback = () => {
  var hashParams = {};
  var e,r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams.access_token && hashParams;
};

export { redirect, callback };
