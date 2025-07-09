import React from "react";
import Container from "../Container/Container";

import { FaGithub } from "react-icons/fa";

import "./Header.css";

import { FaUser } from "react-icons/fa";


const Header = ({ signUpOpen, account, openProfile }) => {
  return (
    <header className="header">
      <Container>
        <a
          className="header__github"
          target="_blank"
          href="https://github.com/Yakov29"
          rel="noopener noreferrer"
        >
          <FaGithub className="header__github-img" />
        </a>
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="#about">
              About
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {account === null ? (
          <button className="header__signup" onClick={signUpOpen}>
            Sign Up
          </button>
        ) : (
          <button className="header__avatar" onClick={openProfile}>
            {account.avatar === "" ? (
              <FaUser className="header__avatar-default" />
            ) : (
              <img
                className="header__avatar-img"
                src={account.avatar}
                alt="avatar"
              />
            )}
          </button>
        )}
      </Container>
    </header>
  );
};

export default Header;
