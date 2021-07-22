import Button from "../Button";
import SearchBar from "../SearchBar";
import Profile from "../Profile";
import { redirect } from "../../config/getLoginAuth";
import Style from "./style.module.css";




const Navbar = ({ userData, handleSearch }) => {
    const isLogin = userData?.access_token !== undefined;
    return (
      <div className={Style.Navbar}>
        {isLogin ?
          (
            <>            
              <SearchBar handleSearch={handleSearch} />
              <Profile userData={userData} />
            </>
          ) : (
           <>
            
            <Button 
              type="button"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium" 
              onClick={() => redirect()}
              >Login</Button> 
          </>)
        }        
      </div>
    );
  };
  
  export default Navbar;