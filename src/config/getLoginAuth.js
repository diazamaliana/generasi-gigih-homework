const getLoginAuth = () => {
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // insert your client id here from spotify
  const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;
  const SPACE_DELIMITER = "%20";
  const SCOPES = [
    "user-read-private",
    "playlist-modify-private",
    "user-read-email",
  ];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
  return `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
};

export default getLoginAuth;

