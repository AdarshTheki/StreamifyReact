import { useSelector } from "react-redux";
import styled from "styled-components";
import { auth } from "../firebase";
import { FaUserEdit } from "react-icons/fa";

function ProfileScreen() {
  const profile = useSelector((state) => state.user);
  const { user } = profile;

  return (
    <ProfileContainer>
      <div className='UserProfile'>
        {!profile ? (
          <p className='UserProfile-notLoggedIn'>
            <FaUserEdit /> You are not logged in.
          </p>
        ) : (
          <div className='UserProfile-content'>
            <h1>User Profile</h1>
            <div className='UserProfile-info'>
              <div className='UserProfile-avatar'>
                <img src={user?.photoURL || "avatar.png"} alt='User Avatar' />
              </div>
              <div className='UserProfile-details'>
                <p>Name: {user?.displayName || "N/A"}</p>
                <p>UID: {user?.uid}</p>
                <p>Email: {user?.email}</p>
                <p>Verified: {user?.emailVerified ? "Yes" : "No"}</p>
                <p>Time: {user?.lastSignInTime || "N/A"}</p>
              </div>
            </div>
            <button className='btn' onClick={() => auth.signOut()}>
              SignOut
            </button>
          </div>
        )}
      </div>
    </ProfileContainer>
  );
}

export default ProfileScreen;

const ProfileContainer = styled.div`
  .UserProfile {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: #fff;
  }

  .UserProfile-content {
    background-color: #333;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 500px;

    .btn {
      padding: 5px 15px;
      margin: 10px auto;
      border: none;
      border-radius: 1vmax;
      background-color: #f5f5f5;
      color: #111;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease-out;

      &:hover {
        background-color: #111;
        color: #fff;
        transform: scale(0.95);
      }
    }
  }

  .UserProfile-info {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .UserProfile-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  .UserProfile-details {
    flex: 1;
  }

  .UserProfile h1 {
    margin-bottom: 10px;
  }

  .UserProfile-notLoggedIn {
    text-align: center;
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
