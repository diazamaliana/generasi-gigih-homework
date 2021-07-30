import { useSpotifyAuth } from "../../libraries/useSpotifyAuth"

const Homepage = () => {
  const { isAuthenticated } = useSpotifyAuth()

  return isAuthenticated ? (
      <div style={{ textAlign: "center" }}>
          <p> Welcome to GG Music Player </p>
      </div>
    ) : (
      <div >
        <p> Please Login to Spotify First </p>
      </div> 
  )
}

export default Homepage