import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import CommentsList from "./commentsList";
import Post from "./common/post";
import { posts, categories } from "../data/posts";
import { Redirect } from "react-router-dom";
import NavbarBack from "./common/navbarBack";

class PostDetails extends Component {
  state = {
    UserTooltipVisible: false,
    post: {},
    category: {},
  };

  componentDidMount() {
    const postId = this.props.match.params.id;
    const post = posts.filter((post) => post.id === postId);

    if (post.length === 0) return <Redirect to="/" />;
    else {
      const category = categories.filter(
        (category) => category.id === post[0].categoryId
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
  PostControls = () => {
    return (
      <div className="post-additional-info">
        <div className="post-controls-profile">
          <div className="control-item">
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <MdModeEdit />
            </IconContext.Provider>
            <span>edit</span>
          </div>
          <div className="control-item">
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <BsTrash />
            </IconContext.Provider>
            <span>delete</span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { UserTooltipVisible, post, category } = this.state;

    return (
      <div className="post-details-wrapper">
        <NavbarBack path="/" />
        <div
          className="post-detail-header"
          style={{ backgroundColor: category.color }}
        >
          <div className="post-category">
            <span style={{ color: category.color }}>{category.name}</span>
          </div>
          <h4 className="question-synthese">{post.title}</h4>
        </div>
        <div className="post-details-container">
          <Post
            post={post}
            postControls={this.PostControls}
            onShowUser={this.handleShowUser}
            UserTooltipVisible={UserTooltipVisible}
            onHideUser={this.handleHideUser}
          />
          <div className="post-detail-comment">
            <div className="post-sidebar-wrapper">
              <div className="add-comment-btn">
                <span>Add comment</span>
              </div>
            </div>
          </div>
          <div className="comments-wrapper">
            <CommentsList />
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetails;
