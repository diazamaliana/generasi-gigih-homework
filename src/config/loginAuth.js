//The ID provided to the application at the time of registration of the app
const REACT_APP_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REACT_APP_REDIRECT_URL = process.env.REACT_APP_BASE_URL;
const generateRandomString = (length) => {
  var result = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return result;
};

const redirect = () => {

  const scope = "user-read-private playlist-modify-private user-read-email";
  const state = generateRandomString(16);
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(REACT_APP_CLIENT_ID)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(REACT_APP_REDIRECT_URL)}`;
  url += `&state=${encodeURIComponent(state)}`;
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
