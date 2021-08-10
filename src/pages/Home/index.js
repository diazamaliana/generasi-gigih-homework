import './styles.css'
import Card from 'components/Card'

const Home = () => {
  return (
      <div className="home">
        <h1 className="subtitle"> Playlists </h1>
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