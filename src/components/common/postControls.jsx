import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

class PostControls extends Component {
  state = {
    showPostControls: false,
  };
  handleShowPostControls = () => {
    this.setState({ showPostControls: !this.state.showPostControls });
  };
  handlHidePostControls = () => {};
  handleEditComment = (post) => {
    console.log("post edited", post);
  };
  handleDeletePost = (post) => {
    console.log("post deleted", post);
  };
  render() {
    const { post } = this.props;
    return (
      <div className="post-additional-info">
        <div className="post-controls-profile">
          <div
            className="control-item"
            onClick={() => this.handleEditComment(post)}
          >
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <MdModeEdit />
            </IconContext.Provider>
            <span>edit</span>
          </div>
          <div
            className="control-item"
            onClick={() => this.handleDeletePost(post)}
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

export default PostControls;
