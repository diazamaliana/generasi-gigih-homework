import style from "./style.module.css";
import Button from "../../Button";
import Profile from "../../Profile";
import { useSpotifyAuth } from '../../../libraries/useSpotifyAuth';
import { authorize } from '../../../libraries/apiSpotify';
import { FaSpotify } from "react-icons/fa";


const Navbar = () => {
  const { isAuthenticated, user } = useSpotifyAuth();  

    return (
      <div className={style.Navbar}>
        <div className={style.logo}>
          <h3><FaSpotify />  Spotigi</h3>
        </div>
        {isAuthenticated ? (
          <div className={style.user}>
            <Profile userData={user} />
          </div>
        ) : (
           <>
            <Button 
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium" 
              onClick={authorize}
              >Login</Button> 
          </>)
        }       
      </div>
    );
  };
  
  export default Navbar;