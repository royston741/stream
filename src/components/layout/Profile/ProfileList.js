import "./ProfileList.css";
import ProfileWrapper from "./ProfileWrapper";
import userImg from '../../../img/user.png'

function ProfileList() {
  return (
    <ul className="profile_list">
      <ProfileWrapper>
        <p>
          <img src={userImg} alt="" />
          Royston
        </p>
      </ProfileWrapper>
      <hr />
      <ProfileWrapper>
        <p>Manage Profiles</p>
      </ProfileWrapper>
      <hr />
      <ProfileWrapper>
        <p>HELP/FAQ</p>
        <p>User Settings</p>
      </ProfileWrapper>
      <hr />
      <ProfileWrapper>
        <p>Logout</p>
      </ProfileWrapper>
    </ul>
  );
}

export default ProfileList;
