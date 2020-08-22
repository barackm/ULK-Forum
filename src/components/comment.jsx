import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserTooltip from "./common/userTooltip";

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
    return (
      <div className="comment-item-wrapper">
        <span>7 Days later</span>
        <div className="post-detail-profile">
          <div className="post-profile">
            <Link
              to="/"
              className="post-owner comment"
              onMouseEnter={this.handleShowUser}
            >
              <span>J</span>
            </Link>
            <div className="post-timing-details comment">
              <Link
                to="/"
                className="owner-details"
                onMouseEnter={this.handleShowUser}
              >
                John Doe
              </Link>
              <h5>12 Hours ago</h5>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="content">
            <p>
              hello guys, <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi
              laboriosam officiis <br />
              rem ullam ducimus veritatis unde culpa explicabo odit velit
              voluptatibus, at tenetur eos facilis omnis mollitia, a sapiente
              deleniti nemo nam sit. Magnam omnis minima cupiditate alias vitae
              dignissimos voluptatum quam quisquam consequatur! Debitis quo
              voluptas exercitationem accusamus quaerat quod at, officia
            </p>
          </div>
          <div className="footer">
            <div className="post-btn">
              <span>Like</span>
              <span>Reply</span>
            </div>
          </div>
        </div>
        <UserTooltip
          visible={UserTooltipVisible}
          onMouseLeave={this.handleHideUser}
        />
      </div>
    );
  }
}

export default Comment;
