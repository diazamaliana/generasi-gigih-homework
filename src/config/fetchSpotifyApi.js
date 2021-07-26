const getSpotifyApi = (URL, TOKEN) => {
  return fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  }).then(res => res.json())
}

export default getSpotifyApi;
 