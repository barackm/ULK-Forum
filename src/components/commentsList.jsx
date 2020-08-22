import React, { Component } from "react";
import Comment from "./comment";

class CommentsList extends Component {
  state = {};
  render() {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="comments-list-wrapper">
        {myArray.map((m) => (
          <div key={m}>
            <Comment />
          </div>
        ))}
      </div>
    );
  }
}

export default CommentsList;
