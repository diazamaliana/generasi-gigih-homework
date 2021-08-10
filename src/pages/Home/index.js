import './styles.css'
import Card from 'components/Card'
import { Heading } from '@chakra-ui/react'


const Home = () => {
  return (
      <div className="home">
        <Heading className="subtitle"> Playlists </Heading>
        <div className="content">
          <Card
            title="hello"
            artist="Bruno Mars"
            thumbnail="123"
          />
           <Card
            title="hello"
            artist="Bruno Mars"
            thumbnail="123"
          />
           <Card
            title="hello"
            artist="Bruno Mars"
            thumbnail="123"
          />
        </div>
      </div>
  )
}

export default Home