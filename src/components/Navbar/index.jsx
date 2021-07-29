import style from "./style.module.css";
import Link from "../Link";
import Login from "../../pages/Login"

const Navbar = () => {
    
    return (
      <div className={style.Navbar}>
        
                   
        <div className={style.container} >
            {/* <img className={style.image} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="user image" />
            <Link href="https://open.spotify.com/user/diazamaliana" className={style.name}>Diaz Amaliana</Link>        */}
            <Login />
        </div>
            
      </div>
    );
  };
  
  export default Navbar;