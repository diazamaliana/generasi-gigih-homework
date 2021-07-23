const API_ENDPOINT = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(API_ENDPOINT + "/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchTrack = (accessToken, options) => {
  const params = new URLSearchParams(options).toString();
  return fetch(`${API_ENDPOINT}/search?${params}`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { getProfile, getSearchTrack };

 