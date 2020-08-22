import React, { Component } from "react";
import { IconContext } from "react-icons/";
import { RiCloseLine } from "react-icons/ri";
class ModalHeader extends Component {
  state = {};
  render() {
    const { title, onClose } = this.props;
    return (
      <div className="modal-header-container">
        <div className="modal-title">
          <h4>{title}</h4>
        </div>
        <div className="modal-close-btn" onClick={onClose}>
          <IconContext.Provider value={{ className: "modal-close-icon" }}>
            <RiCloseLine />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default ModalHeader;
