import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import truncatedStr from "../utils/getTruncatedString";

class DiscussionItem extends Component {
  render() {
    const { post, users, categories, comments } = this.props;
    const user = users.filter((user) => user._id === post.userId);
    const category = categories.filter(
      (category) => category._id === post.categoryId
    );
    const _comments = comments.filter((comment) => comment.postId === post._id)
      .length;
    return (
      <Link to={`/post/${post._id}`} className="discussion-item-main-wrapper">
        <div className="discussion-profile-wrapper">
          <div className="post-details-fdw">
            <div
              className="dicussion-profile"
              style={{
                backgroundColor: user[0].color,
              }}
            >
              {user[0].imageUrl ? (
                <img src={user[0].imageUrl} alt={user[0].initial} />
              ) : (
                <span>{user[0].initial}</span>
              )}
            </div>
          </div>
          <div className="discussion-body">
            <span>{truncatedStr(post.title, 100)}</span>
            <div className="post-about-timing">
              <span style={{ backgroundColor: category[0].color }}>
                {category[0].name}
              </span>
              <span>Posted 5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="discussion-comments">
          <span
            className="category-name-discusion-item"
            style={{ backgroundColor: category[0].color }}
          >
            {category[0].name}
          </span>
          <IconContext.Provider
            value={{ className: "discussion-icon comment" }}
          >
            <FaRegComment />
          </IconContext.Provider>
          <span>{_comments}</span>
        </div>
      </Link>
    );
  }
}

export default DiscussionItem;
