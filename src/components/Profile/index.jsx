import Style from "./style.module.css";
import Link from "../Link";

const Profile = ({ userData }) => {
    const isLoading = userData.display_name === undefined;
    const { external_urls, display_name, images } = userData;
    return isLoading ? (
      <div className={Style.container}>Loading...</div>
    ) : (
      <div className={Style.container}>
        <img className={Style.image} src={images[0]?.url} alt={display_name} />
        <Link href={external_urls.spotify} className={Style.name}>{display_name}</Link>
      </div>
    );
  };
  
export default Profile;