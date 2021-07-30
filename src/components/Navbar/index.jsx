import style from "./style.module.css";
import Button from "../Button";
import Profile from "../Profile";
import { useSpotifyAuth } from '../../libraries/useSpotifyAuth';
import { authorize } from '../../libraries/apiSpotify';


const Navbar = () => {
  const { isAuthenticated, user } = useSpotifyAuth();  


    return (
      <div className={style.Navbar}>
        {isAuthenticated ? (
          <Profile userData={user} />
        ) : (
           <>
           <h1>Logo</h1>
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