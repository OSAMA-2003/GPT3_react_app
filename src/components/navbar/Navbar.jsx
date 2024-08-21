/** @format */

import React, { useState } from "react";
import "./navbar.css";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="gpt3_navbar_links_container">
         <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibillity"> Open Ai</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog"> Library</a>
    </p>
        </div>
      </div>

      <div className="gpt3_navbar_sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="menu">

        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}


      {toggleMenu && (
        
        <div className="menu_container">
        <div className="menu_container_links scale-up-center">
        <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibillity"> Open Ai</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog"> Library</a>
    </p>
          <div className="menu_sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
      </div>
      )}

      </div>
      
    </div>
  );
};

export default Navbar;




