import React from "react";
import { IconContext } from "react-icons";

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        <IconContext.Provider value={{ className: "editor-controlls-icon" }}>
          {this.props.icon}
        </IconContext.Provider>
      </span>
    );
  }
}

export default StyleButton;
