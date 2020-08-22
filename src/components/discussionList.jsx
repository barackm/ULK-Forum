import React, { Component } from "react";
import DiscussionItem from "./discussionItem";
import { categories } from "../data/posts";

class DiscussionList extends Component {
  state = {
    limit: 6,
  };
  handleLoadMore = () => {
    this.setState({ limit: this.state.limit + 3 });
  };
  render() {
    // const array = [1, 2, 3, 4, 5, 6, 7, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
    // const newArray = array.slice(0, this.state.limit);
    const { posts, users, categories } = this.props;
    return (
      <div className="discussion-list-main-wrapper">
        {posts.map((post) => (
          <div key={post.id}>
            <DiscussionItem post={post} users={users} categories={categories} />
          </div>
        ))}
        {/* {!array.length <= this.state.limit ? (
          <div className="load-mote-btn-wrapper">
            <div className="load-more-btn" onClick={this.handleLoadMore}>
              <span>Load more</span>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}

export default DiscussionList;
