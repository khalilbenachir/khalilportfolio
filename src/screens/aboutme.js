import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/KBlogo.png";
import Linkedin from "../assets/linkedin-brands.png";
import Instagram from "../assets/instagram-brands.svg";
import Github from "../assets/github-square-brands.png";
import Main_picture from "../assets/2114086.png";

import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="main">
      <div className="main__left">
        <div className="main__left-logoWrapper">
          <img className="logoWrapper_logo" src={Logo} alt="logo" />
        </div>
        <div className="main__left-contentWrapper">
          <h1 className="contentWrapper-heading1">hI,I’M khalil !</h1>
          <h2 className="contentWrapper-heading2">A full-stack developer.</h2>
          <div className="contentWrapper-heading3">
            <h3 className="contentWrapper-heading3__paragraph">
              {" "}
              My goal is to translate your ideas into applications.
            </h3>
          </div>
        </div>
        <div className="contactWrapper">
          <div className="contactWrapper_logo">
            <a className="logo" href="/">
              <img src={Linkedin} alt="logo" />
            </a>
            <a className="logo" href="/">
              <img src={Instagram} alt="logo" />
            </a>
            <a className="logo" href="/">
              <img src={Github} alt="logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="main__right">
        <nav class="main__right_navbar">
          <ul>
            <li>
              <Link to="/aboutme">About me</Link>
            </li>
            <li>
              <Link to="/mywork">My work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="main__right-content">
          <img
            className="content_picture"
            src={Main_picture}
            alt="main picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
