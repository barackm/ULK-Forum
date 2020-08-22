import React, { Component } from "react";
// import StyleButton from "./styledButton";
import { GoTextSize } from "react-icons/go";
import { FaHeading } from "react-icons/fa";
import { IconContext } from "react-icons";
class HeaderStyle extends Component {
  state = {
    showHeadings: false,
    selectedHeading: "",
  };
  constructor() {
    super();
    this.onToggle = (blockType, e) => {
      e.preventDefault();
      this.props.onToggle(blockType);
      this.setState({ showHeadings: !this.state.showHeadings });
    };
  }
  BLOCK_TYPE_HEADINGS = [
    { label: "H1", style: "header-one", icon: <GoTextSize /> },
    { label: "H2", style: "header-two", icon: <GoTextSize /> },
    { label: "H3", style: "header-three", icon: <GoTextSize /> },
    { label: "H4", style: "header-four", icon: <GoTextSize /> },
    { label: "H5", style: "header-five", icon: <GoTextSize /> },
    { label: "H6", style: "header-six", icon: <GoTextSize /> },
  ];

  handleShowHeadings = (e) => {
    e.preventDefault();
    this.setState({ showHeadings: !this.state.showHeadings });
  };
  render() {
    return (
      <div className="heading-styles">
        <div onMouseDown={this.handleShowHeadings}>
          <IconContext.Provider value={{ className: "heading-style-icon" }}>
            <FaHeading />
          </IconContext.Provider>
        </div>

        {this.state.showHeadings && (
          <div className="heading-wrapper">
            {this.BLOCK_TYPE_HEADINGS.map((h) => (
              <div
                key={h.label}
                className="heading"
                onMouseDown={(e) => this.onToggle(h.style, e)}
              >
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default HeaderStyle;
