import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import female_avatar from "../assets/female_avatar.svg";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  return (
    <div className='nav'>
      <NavLink to='/' className='nav__logo'>ReactStream</NavLink>
      
      
    </div>
  );
};

export default Nav;
