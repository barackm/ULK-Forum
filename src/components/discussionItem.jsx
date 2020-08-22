import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
class DiscussionItem extends Component {
  state = {};

  render() {
    const { post, users, categories } = this.props;
    const user = users.filter((user) => user.id === post.userId);
    const category = categories.filter(
      (category) => category.id === post.categoryId
    );
    return (
      <Link to={`/post/${post.id}`} className="discussion-item-main-wrapper">
        <div className="discussion-profile-wrapper">
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
          <div className="discussion-body">
            <span>{post.title}</span>
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
          <IconContext.Provider value={{ className: "discussion-icon" }}>
            <FaRegComment />
          </IconContext.Provider>
          <span>50</span>
        </div>
      </Link>
    );
  }
}

export default DiscussionItem;
