import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaUserAlt, FaCog } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
class LoginLinks extends Component {
  state = {
    loginLinksToggled: false,
  };
  handleShowLoginLink = () => {
    this.setState({ loginLinksToggled: !this.state.loginLinksToggled });
  };
  render() {
    const { loginLinksToggled } = this.state;
    const { onCloseNavbar } = this.props;
    const currentUser = {
      _id: "898549a0-52bc-4a72-9323-68c3c78deea5",
      email: "aline@gmail.com",
      userName: "Alline",
      initial: "A",
      imageUrl: "",
      color: "#FFC312",
      joinedAt: "7 mach, 2020",
    };
    return (
      <div
        className={
          loginLinksToggled
            ? "login-links-main-wrapper toggled"
            : "login-links-main-wrapper"
        }
        onClick={this.handleShowLoginLink}
      >
        <div className="login-links-btn">
          <div className="login-link-profile-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
              alt=""
            />
          </div>
          <div className="login-links-name">
            <span>{currentUser.userName}</span>
          </div>
        </div>
        <ul
          className={
            loginLinksToggled
              ? "drop-down-links profile toggled"
              : "drop-down-links profile"
          }
        >
          <li onClick={onCloseNavbar}>
            <Link to={`/profile/${currentUser.userName}`}>
              <div className="check-icon-wrapper profile">
                <IconContext.Provider value={{ className: "login-links-icon" }}>
                  <FaUserAlt />
                </IconContext.Provider>
              </div>
              Profile
            </Link>
          </li>
          <li onClick={onCloseNavbar}>
            <Link to={`/profile/${currentUser.userName}/settings`}>
              <div className="check-icon-wrapper profile">
                <IconContext.Provider value={{ className: "login-links-icon" }}>
                  <FaCog />
                </IconContext.Provider>
              </div>
              Settings
            </Link>
          </li>
          <li onClick={onCloseNavbar}>
            <div className="check-icon-wrapper profile">
              <IconContext.Provider value={{ className: "login-links-icon" }}>
                <IoIosLogOut />
              </IconContext.Provider>
            </div>
            <span className="profile-link-item">Logout</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginLinks;
