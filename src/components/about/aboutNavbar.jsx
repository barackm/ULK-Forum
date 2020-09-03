import React, { Component } from "react";

class AboutNavbar extends Component {
  state = {};
  render() {
    return (
      <div className="about-navbar-main-wrapper">
        <div className="navbar-about-container">
          <div className="about-navbar-links-wrapper">
            <ul>
              <li>
                <a href="/">Forum</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutNavbar;
