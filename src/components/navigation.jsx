import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import AuthLinks from "./authLinks";
import logo from "../media/ULK_Logo.png";
import "./styles/main.css";
// import AuthLinks from "./authLinks";
import LoginLinks from "./loginLinks";

class Navigation extends Component {
  state = {
    loginLinksToggled: false,
  };
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
  handleToggleNavLinks = () => {
    this.setState({ loginLinksToggled: !this.state.handleToggleNavLinks });
  };
  render() {
    const { menuToggled, onSearch, value } = this.props;
    // const { loginLinksToggled } = this.state;
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
                <NavLink to="/about" onClick={this.handleHideMenu}>
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
              <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={onSearch}
              />
            </div>
            <AuthLinks
              onShowSignUpModal={this.handleShowSighUpModal}
              onShowLoginModal={this.handleShowLoginModal}
            />
            {/* <LoginLinks onCloseNavbar={() => this.props.onHideMenu()} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
