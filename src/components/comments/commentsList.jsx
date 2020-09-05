import React, { Component } from "react";

import Comment from "./comment";
import AppAlert from "../common/alert";
import RichTextEditor from "../textEditor/richTextEditor";
import { IconContext } from "react-icons";
import { TiArrowBack } from "react-icons/ti";

class CommentsList extends Component {
  state = {
    UserTooltipVisible: false,
    showCommentControls: false,
    showPostControls: false,
    showTagsCategorieModal: false,
    showAlert: false,
    alertMessage: "",
    currentComment: {},
  };
  handleEditComment = (comment) => {
    console.log("comment edited", comment);
  };
  handleDeletePost = (comment) => {
    console.log("comment deleted", comment);
  };
  postBackward = (post) => {
    return (
      <div className="post-details-backward">
        <div onClick={this.handleReduceTextEditor}>
          <IconContext.Provider
            value={{ className: "post-details-icon-backward" }}
          >
            <TiArrowBack />
          </IconContext.Provider>
          Edit comment
        </div>
      </div>
    );
  };
  handleReportComment = (comment) => {};
  handleToggleEditor = (comment) => {
    this.props.onHideEditor();
    this.setState({
      showEditor: !this.state.showEditor,
      currentComment: comment,
    });
  };
  handleShowEditor = () => {
    this.setState({ showEditor: true });
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
  render() {
    const { comments, users } = this.props;
    const { alertMessage, showTagsCategorieModal, showAlert } = this.state;

    return (
      <>
        <div className="comments-list-wrapper">
          {comments.map((comment) => (
            <div key={comment._id}>
              <Comment
                onReportComment={this.handleReportComment}
                onEditComment={this.handleToggleEditor}
                onDeleteComment={this.handleDeletePost}
                comment={comment}
                users={users}
              />
            </div>
          ))}
        </div>
        <RichTextEditor
          style={{ marginLeft: 0 }}
          defaultContent={this.state.currentComment.content}
          comment={() => this.postBackward()}
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
      </>
    );
  }
}

export default CommentsList;
