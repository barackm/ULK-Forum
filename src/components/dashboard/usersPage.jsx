import React, { Component } from "react";
import _ from "lodash";
import { IconContext } from "react-icons/";
import { users, posts } from "../../data/posts";
import { GrSearch } from "react-icons/gr";
import paginate from "../utils/paginate";

import UsersTable from "./usersTable";
import Pagination from "../common/pagination";
class UsersPage extends Component {
  state = {
    searchQuery: "",
    sortColumn: { path: "userName", order: "asc" },
    currentPage: 1,
    pageCount: 8,
  };
  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleDeleteUser = (user) => {
    console.log(user);
  };
  handleMakeUserAdmin = (user) => {
    console.log(user);
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleViewUser = (user) => {
    return this.props.history.push(`/profile/${user.userName}`);
  };
  getUsersPosts = (users, posts) => {
    let _users = [];
    users.map((user) => {
      return _users.push({
        ...user,
        posts: posts.filter((post) => post.userId === user._id).length,
      });
    });
    return _users;
  };
  render() {
    const { sortColumn, searchQuery, currentPage, pageCount } = this.state;
    const newUsers = this.getUsersPosts(users, posts);
    const searchedUsers = newUsers.filter((user) =>
      user.userName.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const pagedUsers = paginate(searchedUsers, currentPage, pageCount + 1);
    const sortedUsers = _.orderBy(
      pagedUsers,
      [sortColumn.path],
      [sortColumn.order]
    );
    return (
      <div className="users-list-main-wrapper">
        <div className="users-list-secondary-container">
          <div className="users-list-header">
            <div className="user-list-navbar-wrapper">
              <div className="users-count">
                <span>Users</span>
                <h2>{users.length}</h2>
              </div>
              <div className="users-count">
                <span>Admins</span>
                <h2>{users.length}</h2>
              </div>
              <div className="users-list-input">
                <IconContext.Provider
                  value={{ className: "users-list-search-icon" }}
                >
                  <GrSearch />
                </IconContext.Provider>
                <input
                  type="text"
                  placeholder="Search user"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="users-list-table">
            <UsersTable
              onViewUser={this.handleViewUser}
              onDeleteUser={this.handleDeleteUser}
              onMakeUserAdmin={this.handleMakeUserAdmin}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              users={sortedUsers}
            />
          </div>
          <Pagination
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            pageCount={pageCount}
            pageItems={searchedUsers}
          />
        </div>
      </div>
    );
  }
}

export default UsersPage;
