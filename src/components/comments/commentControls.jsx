import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

class CommentControls extends Component {
  state = {
    showPostControls: false,
  };
  handleShowPostControls = () => {
    this.setState({ showPostControls: !this.state.showPostControls });
  };
  handlHidePostControls = () => {};
  handleEditComment = (comment) => {
    console.log("comment edited", comment);
  };
  handleDeletePost = (comment) => {
    console.log("comment deleted", comment);
  };
  render() {
    const { comment } = this.props;
    return (
      <div className="post-additional-info">
        <div className="post-controls-profile">
          <div
            className="control-item"
            onClick={() => this.handleEditComment(comment)}
          >
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <MdModeEdit />
            </IconContext.Provider>
            <span>edit</span>
          </div>
          <div
            className="control-item"
            onClick={() => this.handleDeletePost(comment)}
          >
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <BsTrash />
            </IconContext.Provider>
            <span>delete</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentControls;
