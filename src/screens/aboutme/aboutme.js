import React from "react";

import NavBar from "../../components/NavBar/navBar";

import Logo from "../../assets/KBlogo.png";
import Linkedin from "../../assets/linkedin-brands.png";
import Instagram from "../../assets/instagram-brands.svg";
import Github from "../../assets/github-square-brands.png";
import Main_picture from "../../assets/2114086.png";

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
            <a className="logo" href="https://www.linkedin.com/in/khalil-benachir-797228155/">
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a className="logo" href="https://www.instagram.com/khalil_benachir/">
              <img src={Instagram} alt="instagram" />
            </a>
            <a className="logo" href="https://github.com/khalilbenachir">
              <img src={Github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="main__right">
        <NavBar />
        <div className="main__right-content">
          <img
            className="content_picture"
            src={Main_picture}
            alt="main_picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
