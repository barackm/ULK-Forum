import React, { Component } from "react";

import Comment from "./comment";

class CommentsList extends Component {
  state = {};
  render() {
    const { comments, users } = this.props;

    return (
      <div className="comments-list-wrapper">
        {comments.map((comment) => (
          <div key={comment._id}>
            <Comment comment={comment} users={users} />
          </div>
        ))}
      </div>
    );
  }
}

export default CommentsList;
