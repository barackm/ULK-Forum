import React, { Component } from "react";
import { IconContext } from "react-icons/";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";

class NavbarForum extends Component {
  state = {};
  render() {
    const {
      onToggleMenu,
      onChangeCategory,
      categorySelected,
      onShowEditor,
    } = this.props;

    return (
      <div className="navbar-forum-main-wrapper">
        <div className="navbar-forum-main-container">
          <div className="navbar-hamberger-wrapper" onClick={onToggleMenu}>
            <IconContext.Provider
              value={{ className: "navbar-icon-forum-page" }}
            >
              <GiHamburgerMenu />
            </IconContext.Provider>
          </div>
          <div className="navbar-category-tag-wrapper">
            <div
              className="navbar-category-selected"
              onClick={onChangeCategory}
            >
              <span>
                {categorySelected ? categorySelected : "All Categories"}
              </span>
              <IconContext.Provider
                value={{ className: "navbar-icon-forum-page" }}
              >
                <TiArrowUnsorted />
              </IconContext.Provider>
            </div>
          </div>
          <div
            className="navbar-text-editor-icon-wrapper"
            onClick={onShowEditor}
          >
            <IconContext.Provider
              value={{ className: "navbar-icon-forum-page" }}
            >
              <BsPencilSquare />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarForum;
