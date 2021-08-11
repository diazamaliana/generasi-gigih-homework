import './styles.css'
import Card from 'components/Card'
import { Heading } from '@chakra-ui/react'


const Home = () => {
  return (
      <div className="home">
        <Heading className="subtitle"> Playlists </Heading>
        <div className="content">
          <Card
            imageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gold-music-mixtape-album-cover-a-design-template-a84a8218d568ac563d9e99f4356b90e5_screen.jpg?ts=1589012098"
            title="Lorem Ipsum "
            artist="John Doe"
            thumbnail="123"
          />
           <Card
            imageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gold-music-mixtape-album-cover-a-design-template-a84a8218d568ac563d9e99f4356b90e5_screen.jpg?ts=1589012098"
            title="Dolor  Sit Amet"
            artist="Jane Doe"
            thumbnail="123"
          />
           <Card
            imageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gold-music-mixtape-album-cover-a-design-template-a84a8218d568ac563d9e99f4356b90e5_screen.jpg?ts=1589012098"
            title="Maecenas fermentum"
            artist="Bruno Santarino"
            thumbnail="123"
          />
        </div>
      </div>
  )
}

export default Home