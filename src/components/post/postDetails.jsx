import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { posts, categories, comments, users } from "../../data/posts";
import CommentsList from "../comments/commentsList";
import NavbarBack from "../common/navbarBack";
import truncatedStr from "../utils/getTruncatedString";
import RichTextEditor from "../textEditor/richTextEditor";
import AppAlert from "../common/alert";
import { IconContext } from "react-icons";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-scroll";
import PostControls from "../common/postControls";
import Post from "./post";
class PostDetails extends Component {
  state = {
    UserTooltipVisible: false,
    post: {},
    category: {},
    background: "",
    categorySelected: "",
    showEditor: false,
    showTagsCategorieModal: false,
    categoriesModalShown: false,
    currentText: "",
    alertMessage: "",
    showAlert: false,
    reduceEditor: false,
  };

  componentDidMount() {
    const postId = this.props.match.params._id;
    const post = posts.filter((post) => post._id === postId);

    if (post.length === 0) return <Redirect to="/" />;
    else {
      const category = categories.filter(
        (category) => category._id === post[0].categoryId
      );
      this.setState({
        post: post[0],
        category: category[0],
      });
    }
  }

  handleShowUser = () => {
    this.setState({ UserTooltipVisible: true });
  };
  handleHideUser = () => {
    this.setState({ UserTooltipVisible: false });
  };
  handleToggleEditor = () => {
    this.setState({ showEditor: !this.state.showEditor });
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
  render() {
    const {
      UserTooltipVisible,
      post,
      category,
      showTagsCategorieModal,
      alertMessage,
      showAlert,
    } = this.state;
    const postComments = comments.filter((c) => c.userId === post.userId);

    return (
      <>
        <div className="post-details-wrapper">
          <NavbarBack path="/" />
          <div
            className="post-detail-header"
            style={{ backgroundColor: category.color }}
          >
            <div className="post-category">
              <span style={{ color: category.color }}>{category.name}</span>
            </div>
            <h4 className="question-synthese">
              {truncatedStr(post.title || "welcome", 50)}
            </h4>
          </div>

          <div className="post-details-container" id="post-details">
            <Post
              onComment={this.handleToggleEditor}
              post={post}
              onEdit={() => {}}
              onReport={() => {}}
              onDelete={() => {}}
              postControls={() => <PostControls post={post} />}
              onShowUser={this.handleShowUser}
              UserTooltipVisible={UserTooltipVisible}
              onHideUser={this.handleHideUser}
              commentsNumber={postComments.length}
            />
            <div className="post-detail-comment">
              <div className="post-sidebar-wrapper">
                <div
                  className="add-comment-btn"
                  onClick={this.handleToggleEditor}
                >
                  <span>Add comment</span>
                </div>
              </div>
            </div>
            <div className="comments-wrapper">
              <CommentsList
                onHideEditor={this.handleHideEditor}
                comments={postComments}
                users={users}
              />
            </div>
          </div>
        </div>
        {this.state.showEditor && (
          <RichTextEditor
            defaultContent="this is the default content"
            comment={() => this.postBackward(post)}
            onSubmit={this.handleSubmitPost}
            onCloseCategorie={this.handleCloseTagsCategoriesModal}
            onShowCategories={this.handleShowTagsCategoriesModal}
            categoriesShown={showTagsCategorieModal}
            showEditor={!this.state.showEditor}
            onHideEditor={this.handleHideEditor}
          />
        )}

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

export default PostDetails;
