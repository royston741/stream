import DropBtn from "../ui/DropBtn";
import "./SearchAndUser.css";
import SearchBar from "./Search/SearchBar";
import userImg from "../../img/user.png";
import ProfileList from "./Profile/ProfileList";
import { useState } from "react";

function SearchAndUser() {
  const [profileDisplay, setProfileDispaly] = useState(false);

  const showProfileHandler = () => {
    setProfileDispaly((prevState) => !prevState);
  };
  return (
    <div className="search_and_user">
      <SearchBar />
      <div className="profile_container">
        <DropBtn title="Royston" className="user_btn" img={userImg} onShow={showProfileHandler}/>
        {profileDisplay && <ProfileList />}
      </div>
    </div>
  );
}

export default SearchAndUser;
