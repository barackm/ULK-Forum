import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdArrowBack } from "react-icons/md";

class NavbarBack extends Component {
  render() {
    const { path } = this.props;
    return (
      <div className="navbar-back-main-wrapper">
        <div className="back-arrow">
          <Link to={path}>
            <IconContext.Provider value={{ className: "navbar-back-icon" }}>
              <MdArrowBack />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavbarBack;
