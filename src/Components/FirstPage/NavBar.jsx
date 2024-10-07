import React from "react";
import { FaHeart, FaUser ,  } from "react-icons/fa"; 
import { GiCarWheel } from "react-icons/gi";
import { GiCelebrationFire } from "react-icons/gi";
import "./NavBar.css";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <GiCarWheel  size={50} color="white"/> <GiCelebrationFire  size={50} color="white"/>
       <span className="logo-text">HOT WHEELS</span>
      </div>
      <div className="navbar-search">
        <input type="text"  placeholder= " Let's find you the perfect car..." className="search-input" /> 
      </div>
      <div className="navbar-options">
        <div className="wishlist">
          <FaHeart color="red" size={25}/> 
          <span>WISH-LIST</span>
        </div>
        <div className="login">
          <FaUser size={25}/>
          <span>LOGIN/SIGN UP</span>
        </div>
      </div>

    </nav>
    <Outlet/>
    </>
  );
};

export default NavBar;
