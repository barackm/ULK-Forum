import React, { Component } from "react";

import Post from "../common/post";
import PostControls from "../common/postControls";

class PostList extends Component {
  render() {
    const {
      onHideUser,
      onShowUser,
      UserTooltipVisible,
      posts,
      user,
      isCurrentUser,
    } = this.props;
    return (
      <>
        {posts.map((post) => (
          <div key={post._id}>
            <Post
              postControls={() => (
                <PostControls post={post} isCurrentUser={isCurrentUser} />
              )}
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
