import React from "react";
import Container from "../Container/Container";

import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

import { FaGithub } from "react-icons/fa";


import "./Header.css";

const Header = ({ changeTheme }) => {
  return (
    <header className="header">
      <Container>
        <a className="header__github" target="_blank" href="https://github.com/Yakov29"><FaGithub className="header__github-img" /></a>
        <ul className="header__list">
          <li className="header__item"> <a className="header__link" href="#about">About</a></li>
          <li className="header__item"> <a className="header__link" href="#projects">Projects</a></li>
          <li className="header__item"> <a className="header__link" href="#contact">Contact</a></li>

        </ul>

      <button className="header__theme-toggle" onClick={changeTheme}></button>
        <button className="header__signup">Sign Up</button>
        <button className="header__avatar"><img className="header__avatar-img" src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png" alt="" /></button>
      </Container>
    </header>

  );
}

export default Header;