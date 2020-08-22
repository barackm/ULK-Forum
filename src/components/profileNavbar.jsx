import React, { Component } from "react";
import { IconContext } from "react-icons/";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowUnsorted } from "react-icons/ti";
class ProfileNavbar extends Component {
  state = {};
  render() {
    const {
      onShowModal,
      handlSelecteLink,
      onToggleMenu,
      selectedLink,
    } = this.props;
    return (
      <div className="profile-navbar-main-wrapper">
        <div className="profile-navbar-container">
          <div
            className="profile-navbar-hamberger-wrapper"
            onClick={onToggleMenu}
          >
            <IconContext.Provider
              value={{ className: "dashboard-navbar-icon" }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
          <div className="profile-navbar-link-selecte-wrapper">
            <div className="profile-selected-link" onClick={onShowModal}>
              <span>{selectedLink ? selectedLink : "Posts"}</span>
              <IconContext.Provider
                value={{ className: "profile-navbar-icon" }}
              >
                <TiArrowUnsorted />
              </IconContext.Provider>
            </div>
          </div>
          <div className="profile-navbar-right-link">
            <span>hello</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileNavbar;
