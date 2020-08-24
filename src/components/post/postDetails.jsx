import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { posts, categories } from "../../data/posts";
import CommentsList from "../comments/commentsList";
import NavbarBack from "../common/navbarBack";
import Post from "../common/post";
import truncatedStr from "../utils/getTruncatedString";

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
          <h4 className="question-synthese">
            {truncatedStr(post.title || "welcome", 50)}
          </h4>
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
