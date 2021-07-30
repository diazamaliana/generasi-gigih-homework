import { Link } from 'react-router-dom'
import style from './style.module.css'
import { HiHome, HiPlus } from "react-icons/hi"


const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul >
        <Link to="/home" className={style.menu}>
          <li><HiHome fontSize="1.3em"/><span> Home </span></li>
        </Link>
        <Link to="/create-playlist" className={style.menu}>
          <li><HiPlus fontSize="1.3em"/><span> Create Playlist </span></li>        
        </Link>
      </ul>        
    </div>
  )
}

export default Sidebar