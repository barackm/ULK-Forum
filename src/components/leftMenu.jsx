import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GoCommentDiscussion } from "react-icons/go";

class LeftMenu extends Component {
  state = {
    btnColor: "#00a651",
    activeCategory: "All Categories",
  };

  handleChangeBtnColor = (c) => {
    this.setState({ btnColor: c.color, activeCategory: c.name });
    this.props.onColorChange(c);
    this.props.onHideModal();
  };
  handleAllCategories = () => {
    this.props.onHideModal();
    this.props.onColorChange("");
    this.setState({ btnColor: "#00a651", activeCategory: "All Categories" });
  };
  render() {
    const { btnColor, activeCategory } = this.state;
    const { categories, categoriesModalShown, category } = this.props;

    return (
      <div
        className={
          categoriesModalShown
            ? "left-menu-wrapper "
            : "left-menu-wrapper visible"
        }
      >
        <div className="sidebar-btn-wrapper">
          <div
            className="sidebtn start-btn"
            style={{ backgroundColor: btnColor }}
            onClick={this.props.onShowEditor}
          >
            <span>Start Discussion</span>
          </div>
          <div
            className="sidebtn category-btn"
            style={{ borderColor: btnColor }}
          >
            <span style={{ color: btnColor }}>Categories</span>
          </div>
        </div>
        <div className="category-item-btns">
          <div
            className={
              activeCategory === "All Categories"
                ? "item-btn-wrapper seleted"
                : "item-btn-wrapper"
            }
            onClick={this.handleAllCategories}
          >
            <IconContext.Provider value={{ className: "category-icon" }}>
              <GoCommentDiscussion />
            </IconContext.Provider>
            <span>All Categories</span>
          </div>
        </div>
        <div className="sidebar-categories-wrapper">
          {categories.map((c) => (
            <div
              key={c._id}
              className={
                activeCategory === c.name
                  ? "category-item selected"
                  : "category-item"
              }
              onClick={() => this.handleChangeBtnColor(c)}
            >
              <div
                className="color-category"
                style={{ backgroundColor: c.color }}
              ></div>
              <span style={{ color: activeCategory === c.name ? c.color : "" }}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LeftMenu;
