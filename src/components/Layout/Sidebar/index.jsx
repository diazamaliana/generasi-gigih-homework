import { Link } from 'react-router-dom'
import style from './style.module.css'
import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5"


const Sidebar = () => {
  return (
      <ul >
        <Link to="/home" className={style.menu}>
          <li><IoHomeOutline fontSize="1.3em"/><span> Home </span></li>
        </Link>
        <Link to="/create-playlist" className={style.menu}>
          <li><IoAddCircleOutline fontSize="1.3em"/><span>Create Playlist </span></li>        
        </Link>
      </ul>        
  )
}

export default Sidebar