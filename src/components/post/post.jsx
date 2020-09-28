import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsThreeDots } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";

import RichTextEditor from "../textEditor/richTextEditor";
import { users } from "../../data/posts";
import UserTooltip from "../common/userTooltip";
import AppAlert from "../common/alert";
import PostReport from "../modals/postReport";
import truncatedStr from "../utils/getTruncatedString";
class Post extends Component {
  state = {
    showPostControls: false,
    UserTooltipVisible: false,
    post: {},
    user: {},
    showTagsCategorieModal: false,
    showAlert: false,
    alertMessage: "",
    currentPost: {},
    showReportModal: false,
    showReplyEditor: false,
  };

  handleShowPostControls = () => {
    this.setState({ showPostControls: !this.state.showPostControls });
  };
  handleShowUser = () => {
    this.setState({ UserTooltipVisible: true });
  };
  handleHideUser = () => {
    this.setState({ UserTooltipVisible: false });
  };
  handlHidePostControls = () => {};

  handleDeletePost = (comment) => {
    this.setState({ showPostControls: false });
  };

  handleToggleEditor = (comment) => {
    this.setState({
      showEditor: true,
      currentPost: comment,
      showPostControls: false,
      showReplyEditor: false,
    });
  };

  handleHideEditor = () => {
    this.setState({ showEditor: false });
  };
  handleShowTagsCategoriesModal = () => {
    this.setState({
      showTagsCategorieModal: !this.state.showTagsCategorieModal,
    });
  };
  handleCloseTagsCategoriesModal = () => {
    this.setState({ showTagsCategorieModal: false });
  };
  handleSubmitPost = (data) => {};
  handleChangeCategory = () => {
    this.setState({ categoriesModalShown: !this.state.categoriesModalShown });
  };
  handlHideCategoryModal = () => {
    this.setState({ categoriesModalShown: false });
  };
  handleShowAlert = () => {
    this.setState({ showAlert: true });
  };
  handleHideAlert = () => {
    this.setState({ showAlert: false });
  };
  handleReduceTextEditor = () => {
    const editor = document.querySelector(".RichEditor-root");
    this.setState({ reduceEditor: !this.state.reduceEditor });
    if (!this.state.reduceEditor) {
      editor.classList.add("re-reduce");
    } else {
      editor.classList.remove("re-reduce");
    }
  };
  handleShowReportModal = () => {
    this.setState({ showReportModal: true, showPostControls: false });
  };
  handleCloseReportModal = () => {
    this.setState({ showReportModal: false });
  };
  handleSubmitPostReport = (report) => {
    console.log(report);
  };

  postBackward = (post) => {
    return (
      <div className="post-details-backward">
        <Link
          onClick={this.handleReduceTextEditor}
          activeClass="active"
          to="post-details"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <IconContext.Provider
            value={{ className: "post-details-icon-backward" }}
          >
            <TiArrowBack />
          </IconContext.Provider>
          {truncatedStr(post.title || "Back to original post", 50)}
        </Link>
      </div>
    );
  };
  handleShowReplyEditor = (post) => {
    this.setState({
      showReplyEditor: true,
      showEditor: false,
      currentPost: post,
    });
  };
  handleHideReplyEditro = () => {
    this.setState({ showReplyEditor: false });
  };
  handleSubmitPostReply = (data) => {
    console.log(data);
  };
  render() {
    const { post, id } = this.props;
    const user = users.filter((user) => user._id === post.userId);
    const newUser = user[0];
    const {
      showPostControls,
      currentPost,
      showTagsCategorieModal,
      alertMessage,
      showReportModal,
      showAlert,
    } = this.state;
    return (
      <>
        <PostReport
          target="Post"
          onSubmitReport={this.handleSubmitPostReport}
          onCloseReportModal={this.handleCloseReportModal}
          showReportModal={showReportModal}
        />
        <div className="post-main-wrapper" onClick={this.handlHidePostControls}>
          {newUser && (
            <>
              <div className="post-detail-profile" id="my-post">
                <div className="post-profile">
                  <Link
                    to={`/profile/${newUser.userName}`}
                    className="post-owner"
                    onMouseEnter={this.handleShowUser}
                    style={{ backgroundColor: newUser.color }}
                  >
                    {newUser.imageUrl ? (
                      <img src={newUser.imageUrl} alt="" />
                    ) : (
                      <span>{newUser.initial}</span>
                    )}
                  </Link>

                  <div to="/" className="post-timing-details">
                    <Link
                      to={`/profile/${newUser.userName}`}
                      className="owner-details"
                      onMouseEnter={this.handleShowUser}
                      // onMouseLeave={this.handleHideUser}
                    >
                      {newUser.userName}
                    </Link>
                    <div className="timing">
                      <span>12 Hours ago</span>
                      <span>Edited</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-container">
                <Link to={`/post/${post._id}`} className="content">
                  <p>{post.content}</p>
                </Link>
                <div className="footer">
                  <div className="post-btn">
                    <div className="post-like-btn-wrapper">
                      <span>Like</span>
                      <span
                        onClick={() => this.handleShowReplyEditor(post, id)}
                      >
                        Reply
                      </span>
                    </div>

                    <div className="controlls-post-wrapper">
                      <div
                        className="additional-info-post"
                        onClick={this.handleShowPostControls}
                      >
                        <IconContext.Provider
                          value={{ className: "post-add-icon" }}
                        >
                          <BsThreeDots />
                        </IconContext.Provider>
                      </div>
                      {showPostControls && (
                        <div className="post-controll-index-wrapper">
                          <div className="post-additional-info">
                            <div className="post-controls-profile">
                              <div
                                className="control-item"
                                onClick={this.handleShowReportModal}
                              >
                                <IconContext.Provider
                                  value={{ className: "profile-edit-icon" }}
                                >
                                  <BsTrash />
                                </IconContext.Provider>
                                <span style={{ color: "#000" }}>Report</span>
                              </div>
                              <div
                                className="control-item"
                                onClick={() => this.handleToggleEditor(post)}
                              >
                                <IconContext.Provider
                                  value={{ className: "profile-edit-icon" }}
                                >
                                  <MdModeEdit />
                                </IconContext.Provider>
                                <span>edit</span>
                              </div>
                              <div
                                className="control-item"
                                onClick={() => this.handleDeletePost(post)}
                              >
                                <IconContext.Provider
                                  value={{ className: "profile-edit-icon" }}
                                >
                                  <BsTrash />
                                </IconContext.Provider>
                                <span style={{ color: "#000" }}>delete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <UserTooltip
                  user={newUser}
                  visible={this.state.UserTooltipVisible}
                  onMouseLeave={this.handleHideUser}
                />
              </div>
            </>
          )}
        </div>
        {this.state.showEditor && (
          <div>
            <RichTextEditor
              style={{ marginLeft: 0 }}
              defaultContent={currentPost}
              onSubmit={this.handleSubmitPost}
              onCloseCategorie={this.handleCloseTagsCategoriesModal}
              onShowCategories={this.handleShowTagsCategoriesModal}
              categoriesShown={showTagsCategorieModal}
              showEditor={!this.state.showEditor}
              onHideEditor={this.handleHideEditor}
            />
            <AppAlert
              message={alertMessage}
              title="Alert"
              onHide={this.handleHideAlert}
              visible={showAlert}
            />
          </div>
        )}
        {this.state.showReplyEditor && (
          <RichTextEditor
            defaultContent="this is the default content"
            comment={() => this.postBackward(post)}
            onSubmit={this.handleSubmitPostReply}
            onCloseCategorie={this.handleCloseTagsCategoriesModal}
            onShowCategories={this.handleShowTagsCategoriesModal}
            categoriesShown={showTagsCategorieModal}
            showEditor={!this.state.showReplyEditor}
            onHideEditor={this.handleHideReplyEditro}
          />
        )}
      </>
    );
  }
}

export default Post;
