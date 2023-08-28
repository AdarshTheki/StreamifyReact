import React, { useEffect, useState } from "react";
import logo from "../assets/netflix_logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

function Nav() {
  const [show, handleShow] = useState(false);

  const profile = useSelector((state) => state.user);
  const { user } = profile;

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <NavContainer>
      <div className={`nav  ${show && "nav__black"}`}>
        <div className='nav__contents'>
          <NavLink to='/'>
            <img src={logo} alt='Netflix_logo' />
          </NavLink>
          <NavLink to='profile' className='links'>
            {!user ? (
              <>
                <FaUserEdit className='icon' />
                <span>OwnerName</span>
              </>
            ) : (
              <>
                <img
                  src={user?.photoURL}
                  alt='owner_photoURL'
                  className='icon'
                />
                <span>{user?.displayName.slice(0,15)}</span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </NavContainer>
  );
}
export default Nav;

const NavContainer = styled.div`
  .nav {
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 60px;
    transition-timing-function: ease-in;
    transition: all 0.5s;
    background-color: transparent;
  }
  .nav__black {
    background-color: #222;
  }
  .nav__contents {
    margin: auto;
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 50px;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 5px;
      color: red;
      text-decoration: none;
      font-weight: 600;
    }
    .icon {
      font-size: 2rem;
      width: 50px;
      border-radius: 50%;
    }
    span {
    }
  }
`;
