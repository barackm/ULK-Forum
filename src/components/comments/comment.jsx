import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { IconContext } from "react-icons";
import UserTooltip from "../common/userTooltip";
import { BsThreeDots } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

class Comment extends Component {
  state = {
    UserTooltipVisible: false,
    showCommentControls: false,
    showPostControls: false,
  };
  handleShowCommentControls = () => {
    this.setState({ showCommentControls: !this.state.showCommentControls });
  };
  handleShowUser = () => {
    this.setState({ UserTooltipVisible: true });
  };
  handleHideUser = () => {
    this.setState({ UserTooltipVisible: false });
  };

  render() {
    const currentUserId = "898549a0-52bc-4a72-9323-68c3c78deea5";
    const { UserTooltipVisible, showCommentControls } = this.state;
    const {
      comment,
      users,
      onEditComment,
      onDeleteComment,
      onReportComment,
    } = this.props;
    const user = users.filter((user) => user._id === comment.userId);
    if (user.length === 0) return <Redirect to="/" />;

    return (
      <>
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
                <div className="controlls-post-wrapper">
                  <div
                    className={
                      showCommentControls
                        ? "additional-info-post toggled"
                        : "additional-info-post "
                    }
                    onClick={this.handleShowCommentControls}
                  >
                    <IconContext.Provider
                      value={{ className: "post-add-icon" }}
                    >
                      <BsThreeDots />
                    </IconContext.Provider>
                  </div>

                  {showCommentControls && (
                    <div className="post-additional-info">
                      <div className="post-controls-profile">
                        <div
                          className="control-item"
                          onClick={() => onReportComment(comment)}
                        >
                          <IconContext.Provider
                            value={{ className: "profile-edit-icon" }}
                          >
                            <BsTrash />
                          </IconContext.Provider>
                          <span>Report </span>
                        </div>
                        {currentUserId === comment.userId && (
                          <>
                            <div
                              className="control-item"
                              onClick={() => onEditComment(comment)}
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
                              onClick={() => onDeleteComment(comment)}
                            >
                              <IconContext.Provider
                                value={{ className: "profile-edit-icon" }}
                              >
                                <BsTrash />
                              </IconContext.Provider>
                              <span>delete</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <UserTooltip
            user={user[0]}
            visible={UserTooltipVisible}
            onMouseLeave={this.handleHideUser}
          />
        </div>
      </>
    );
  }
}

export default Comment;
