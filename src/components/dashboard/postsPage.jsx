import React, { Component } from "react";
import _ from "lodash";
import { IconContext } from "react-icons/";
import { users, posts, comments } from "../../data/posts";
import { GrSearch } from "react-icons/gr";
import PostsTable from "./postsTable";
import truncatedStr from "../utils/getTruncatedString";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";

class PostsPage extends Component {
  state = {
    sortColumn: { path: "owner", order: "asc" },
    searchQuery: "",
    pageCount: 8,
    currentPage: 1,
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  handleViewPost = (post) => {
    return this.props.history.push(`/post/${post._id}`);
  };
  handleDeletePost = (post) => {};
  getPostUser = (posts, users, comments) => {
    console.log(comments);
    const _posts = [];
    posts.map((post) => {
      return _posts.push({
        ...post,
        title: truncatedStr(post.title, 30),
        owner: users.filter((user) => user._id === post.userId)[0].userName,
        _comments: comments.filter((comment) => comment.userId === post.userId)
          .length,
      });
    });
    return _posts;
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { sortColumn, searchQuery, pageCount, currentPage } = this.state;
    const newPosts = this.getPostUser(posts, users, comments);
    const searchedPosts = newPosts.filter(
      (post) =>
        post.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        post.owner.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const pagedPosts = paginate(searchedPosts, currentPage, pageCount);
    const sortedPost = _.orderBy(
      pagedPosts,
      [sortColumn.path],
      [sortColumn.order]
    );
    return (
      <div className="users-list-main-wrapper">
        <div className="users-list-secondary-container">
          <div className="users-list-header">
            <div className="user-list-navbar-wrapper">
              <div className="users-list-input">
                <IconContext.Provider
                  value={{ className: "users-list-search-icon" }}
                >
                  <GrSearch />
                </IconContext.Provider>
                <input
                  type="text"
                  placeholder="Search post or owner"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="users-list-table">
            <PostsTable
              onViewPost={this.handleViewPost}
              onDeletePost={this.handleDeletePost}
              posts={sortedPost}
              users={users}
              comments={comments}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
          </div>
          <Pagination
            pageCount={pageCount}
            pageItems={searchedPosts.length}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
