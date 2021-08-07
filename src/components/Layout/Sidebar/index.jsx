import { Link } from 'react-router-dom'
import style from './style.module.css'
import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5"


const Sidebar = () => {
  return (
    <>
    <aside className={style.sidebar}>
      <ul >
        <Link to="/home" className={style.menu}>
          <li><IoHomeOutline fontSize="1.3em"/><span> Home </span></li>
        </Link>
        <Link to="/create-playlist" className={style.menu}>
          <li><IoAddCircleOutline fontSize="1.3em"/><span>Create Playlist </span></li>        
        </Link>
      </ul>    
    </aside>
    </> 
  )
}

export default Sidebar