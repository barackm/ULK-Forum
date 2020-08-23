import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

import logo from "../media/ULK_Logo.png";
import "./styles/main.css";

class Navigation extends Component {
  state = {};
  handleHideMenu = () => {
    this.props.onHideMenu();
  };
  handleShowLoginModal = () => {
    this.props.onHideMenu();
    this.props.onOpenLoginModal();
  };
  handleShowSighUpModal = () => {
    this.props.onHideMenu();
    this.props.onOpenSignupModal();
  };
  render() {
    const { menuToggled } = this.props;
    return (
      <div
        className={
          menuToggled ? "navigation-wrapper toggled" : "navigation-wrapper"
        }
        id="navigation"
      >
        <div className="navigation-secondary-container">
          <NavLink
            to="/"
            className="logo-brand-wrapper"
            onClick={this.handleHideMenu}
          >
            <img src={logo} alt="" srcSet="" />
            <span>ULK Forum</span>
          </NavLink>
          <div className="links-wrapper">
            <ul>
              <li>
                <NavLink to="/" onClick={this.handleHideMenu}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/" onClick={this.handleHideMenu}>
                  <IconContext.Provider value={{ className: "link-icon" }}>
                    <IoIosNotificationsOutline />
                  </IconContext.Provider>
                  <span>Notifications</span>
                </NavLink>
              </li>
            </ul>
            <div className="input-wrapper">
              <IconContext.Provider value={{ className: "search-icon" }}>
                <BsSearch />
              </IconContext.Provider>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-buttons-container">
              <span className="login-btn" onClick={this.handleShowLoginModal}>
                Log in
              </span>
              <span
                className="sign-up-btn"
                onClick={this.handleShowSighUpModal}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
