import React, { Component } from "react";
import Post from "./common/post";
import PostControls from "./common/postControls";

class PostList extends Component {
  state = {};
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
          <div key={post.id}>
            <Post
              postControls={() => <PostControls post={post} />}
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
