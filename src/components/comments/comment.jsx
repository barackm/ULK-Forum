import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import UserTooltip from "../common/userTooltip";

class Comment extends Component {
  state = {
    UserTooltipVisible: false,
  };
  handleShowUser = () => {
    this.setState({ UserTooltipVisible: true });
  };
  handleHideUser = () => {
    this.setState({ UserTooltipVisible: false });
  };
  render() {
    const { UserTooltipVisible } = this.state;
    const { comment, users } = this.props;
    const user = users.filter((user) => user._id === comment.userId);
    if (user.length === 0) return <Redirect to="/" />;
    return (
      <div className="comment-item-wrapper">
        {/* <span>7 Days later</span> */}
        <div className="post-detail-profile">
          <div className="post-profile">
            <Link
              to={`/profile/${user[0].userName}`}
              className="post-owner comment"
              onMouseEnter={this.handleShowUser}
            >
              {user[0].imageUrl ? (
                <img src={user[0].imageUrl} alt={user[0].userName} />
              ) : (
                <span>{user[0].initial}</span>
              )}
            </Link>
            <div className="post-timing-details comment">
              <Link
                to={`/profile/${user[0].userName}`}
                className="owner-details"
                onMouseEnter={this.handleShowUser}
              >
                {user[0].userName}
              </Link>
              <h5>12 Hours ago</h5>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="content">
            <p>{comment.content}</p>
          </div>
          <div className="footer">
            <div className="post-btn comment">
              <span>Like</span>
              <span>{comment.likes}</span>
            </div>
          </div>
        </div>
        <UserTooltip
          user={user[0]}
          visible={UserTooltipVisible}
          onMouseLeave={this.handleHideUser}
        />
      </div>
    );
  }
}

export default Comment;
