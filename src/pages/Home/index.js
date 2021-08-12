import './styles.css'
import Card from 'components/Card'
import { Heading } from '@chakra-ui/react'
import { getUserPlaylist } from '../../libraries/apiSpotify'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

 


const Home = () => {
  const { isAuthenticated, accessToken } = useSelector(state => state.userAuth)
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
   if(isAuthenticated)
    getUserPlaylist(accessToken)
      .then(user => setPlaylists(user.items))
  }, [isAuthenticated, accessToken]);

  return (
      <div className="home">
        <Heading className="subtitle"> Public Playlists </Heading>
        <div className="content">
          {playlists.map( playlist => 
            <Card
            key={playlist.id}
            alt={playlist.name}
            imageUrl={playlist.images[0]?.url}
            title={playlist.name}
            owner={'By '+ playlist.owner.display_name}
            thumbnail="123"
          />
          )}
          
        </div>
      </div>
  )
}

export default Home