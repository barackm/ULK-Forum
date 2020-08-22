import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowUnsorted } from "react-icons/ti";

class DashboardNavbar extends Component {
  state = {};
  render() {
    const { onShowNav, selectedLink, onToggleMenu } = this.props;
    return (
      <div className="dashboard-navbar-main-wrapper">
        <div className="dashboard-navbar-container">
          <div
            className="dashbaord-navbar-hamberger-wrapper"
            onClick={onToggleMenu}
          >
            <IconContext.Provider
              value={{ className: "dashboard-navbar-icon" }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
          <div className="dashboard-navbar-selecter-links-wrapper">
            <div className="selected-link" onClick={onShowNav}>
              <span>{selectedLink ? selectedLink : "Dashboard"}</span>
              <IconContext.Provider
                value={{ className: "dashboard-navbar-icon" }}
              >
                <TiArrowUnsorted />
              </IconContext.Provider>
            </div>
          </div>
          <div className="dashboard-navbar-right">
            <div className="user-profile-wrapper-dashboard">
              <span>
                Welcome <strong>Fred</strong>
              </span>
              <div className="dashboard-profile-wrapper-image">
                <h3>P</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardNavbar;
