import React, { Component } from "react";
import DiscussionItem from "./discussionItem";

class DiscussionList extends Component {
  state = {
    limit: 6,
  };
  handleLoadMore = () => {
    this.setState({ limit: this.state.limit + 3 });
  };
  render() {
    const { posts, users, categories, comments } = this.props;
    return (
      <div className="discussion-list-main-wrapper">
        {posts.map((post) => (
          <div key={post._id}>
            <DiscussionItem
              post={post}
              users={users}
              categories={categories}
              comments={comments}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default DiscussionList;
