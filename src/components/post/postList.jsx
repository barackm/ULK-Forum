import React, { Component } from "react";

import Post from "./post";
class PostList extends Component {
  state = {
    UserTooltipVisible: false,
  };

  render() {
    const {
      onHideUser,
      onShowUser,
      UserTooltipVisible,
      posts,
      user,
    } = this.props;

    return (
      <>
        {posts.map((post) => (
          <div key={post._id}>
            <Post
              onShowUser={onShowUser}
              UserTooltipVisible={UserTooltipVisible}
              onHideUser={onHideUser}
              post={post}
              user={user}
            />
          </div>
        ))}
      </>
    );
  }
}

export default PostList;
