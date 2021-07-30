import { Link } from 'react-router-dom'
import style from './style.module.css'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <h2>Music Player</h2>
      </div>
      <ul >
        <Link to="/" className={style.menu}>
          <li>Home</li>
        </Link>
        <Link to="/create-playlist" className={style.menu}>
          <li>Create Playlist</li>        
        </Link>
      </ul>        
    </div>
  )
}

export default Sidebar