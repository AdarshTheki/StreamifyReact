import { useSelector } from "react-redux";
import styled from "styled-components";
import { auth } from "../firebase";
import { FaUserEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector((state) => state.user.user);

  return (
    <ProfileContainer>
      <div className='UserProfile'>
        {!user ? (
          <div className="logged">
          <p className='title'>
            <FaUserEdit /> You are not logged in.
          </p>
          <NavLink className="btn" to="/login">Login</NavLink>
          </div>
        ) : (
          <div className='UserProfile-content'>
            <h1>User Profile</h1>
            <div className='UserProfile-info'>
              <div className='UserProfile-avatar'>
                <img src={user?.photoURL || "avatar.png"} alt='Avatar' />
              </div>
              <div className='UserProfile-details'>
                <p><span>Name:</span> {user?.displayName || "N/A"}</p>
                <p><span>UID:</span> {user?.uid}</p>
                <p><span>Email:</span> {user?.email}</p>
                <p><span>Verified:</span> {user?.emailVerified ? "Yes" : "No"}</p>
                <p><span>Time:</span> {user?.lastSignInTime || "N/A"}</p>
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

  .logged {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    .title {
      font-size: 2rem;
    }
    .btn {
      font-size: 2rem;
      color: blue;
      text-decoration: none;
    }
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

    span {
      display: inline-block;
      width: 60px;
      font-weight: 600;
      color: #7091f5;
    }
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
