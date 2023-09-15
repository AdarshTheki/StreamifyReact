import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { FaUserEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./ProfileScreen.scss";

function ProfileScreen() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className='UserProfile'>
      {!user ? (
        <div className='logged'>
          <p className='title'>
            <FaUserEdit /> You are not logged in.
          </p>
          <NavLink className='btn' to='/login'>
            Login
          </NavLink>
        </div>
      ) : (
        <div className='UserProfile-content'>
          <h1>User Profile</h1>
          <div className='UserProfile-info'>
            <div className='UserProfile-avatar'>
              <img src={user?.photoURL || "avatar.png"} alt='Avatar' />
            </div>
            <div className='UserProfile-details'>
              <p>
                <span>Name:</span> {user?.displayName || "N/A"}
              </p>
              <p>
                <span>UID:</span> {user?.uid}
              </p>
              <p>
                <span>Email:</span> {user?.email}
              </p>
              <p>
                <span>Verified:</span> {user?.emailVerified ? "Yes" : "No"}
              </p>
              <p>
                <span>Time:</span> {user?.lastSignInTime || "N/A"}
              </p>
            </div>
          </div>
          <button className='btn' onClick={() => auth.signOut()}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;
