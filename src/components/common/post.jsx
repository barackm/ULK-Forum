import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserTooltip from "./userTooltip";
import { IconContext } from "react-icons";
import { BsThreeDots } from "react-icons/bs";
import { users } from "../../data/posts";

class Post extends Component {
  state = {
    showPostControls: false,
    UserTooltipVisible: false,
    post: {},
    user: {},
  };
  componentDidMount() {
    // const post = this.props.post;
  }

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
  render() {
    const { postControls, post } = this.props;
    const user = users.filter((user) => user.id === post.userId);
    const newUser = user[0];

    return (
      <div className="post-main-wrapper" onClick={this.handlHidePostControls}>
        {newUser && (
          <>
            <div className="post-detail-profile">
              <div className="post-profile">
                <Link
                  to="/"
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
                    to="/"
                    className="owner-details"
                    onMouseEnter={this.handleShowUser}
                  >
                    {newUser.firstName}
                  </Link>
                  <div className="timing">
                    <span>12 Hours ago</span>
                    <span>Edited</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-container">
              <div className="content">
                <p>{post.content}</p>
              </div>
              <div className="footer">
                <div className="post-btn">
                  <div className="post-like-btn-wrapper">
                    <span>Like</span>
                    <span>Reply</span>
                  </div>
                  {postControls && (
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

                      {this.state.showPostControls && (
                        <div>{postControls()}</div>
                      )}
                    </div>
                  )}
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
    );
  }
}

export default Post;
