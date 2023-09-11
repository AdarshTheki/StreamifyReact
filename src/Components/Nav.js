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
      {(toggleMenu || screenWidth > 500) && (
        <ul className={`nav__list ${!toggleMenu && "display-none"}`}>
          <NavLink to="/movie" className='nav__items'>movie</NavLink>
          <NavLink to="/tv" className='nav__items'>tv show</NavLink>
          <NavLink to="/people" className='nav__items'>people</NavLink>
          <NavLink to="/contact" className='nav__items'>Contact</NavLink>
          <NavLink to="/login" className='nav__items'>Login</NavLink>
        </ul>
      )}
      {toggleMenu ? (
        <AiFillCloseCircle
          onClick={() => setToggleMenu(!toggleMenu)}
          className='nav__btn'
        />
      ) : (
        <FaBars
          onClick={() => setToggleMenu(!toggleMenu)}
          className='nav__btn'
        />
      )}
    </div>
  );
};

export default Nav;
