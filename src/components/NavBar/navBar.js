import React, { Component } from "react";

import { Link } from "react-router-dom";
import './navbar.css';
export default class NavBar extends Component {
  render() {
    return (
      <nav className="main__right_navbar">
        <ul>
          <li>
            <Link to="/aboutme">About me</Link>
          </li>
          <li>
            <Link to="/mywork">My work</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
