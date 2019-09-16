import React from "react";

import NavBar from "../../components/MyWorkNB/navBar";
import Card from "../../components/card/card";

import "./mywork.css";

const AboutMe = () => {
  return (
    <div className="main__mywork">
      <div className="contentWrapper-mywork">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="navBar-mywork">
        <NavBar className="navBar" />
      </div>
    </div>
  );
};

export default AboutMe;

/*

 <div className="mywork_contentWrapper">
          <Card className="card" />
        </div>

         <NavBar />
*/
