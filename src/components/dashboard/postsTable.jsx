import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons/";
import TableHeader from "../common/table/tableHeader";
import TableBody from "../common/table/tableBody";
import { FiExternalLink } from "react-icons/fi";

class PostsTable extends Component {
  state = {};
  columns = [
    {
      _id: 1,
      name: "Owner",
      path: "owner",
      className: "column1 post",
    },
    {
      _id: 2,
      name: "Title",
      path: "title",
      className: "column2 post",
    },
    {
      _id: 3,
      name: "Posted at",
      path: "postedAt",
      className: "column3 post",
    },
    {
      _id: 4,
      name: "Comments",
      path: "_comments",
      className: "column4 post",
    },
    {
      _id: 5,
      name: "view",
      content: (post) => (
        <button
          className="table-btn"
          onClick={() => this.props.onViewPost(post)}
        >
          <IconContext.Provider value={{ className: "movies-list-icon-trash" }}>
            <FiExternalLink />
          </IconContext.Provider>
        </button>
      ),
      className: "column5 post",
    },
    {
      _id: 6,
      name: "Delete",
      content: (post) => (
        <button
          className="table-btn delete"
          onClick={() => this.props.onDeletePost(post)}
        >
          <IconContext.Provider value={{ className: "movies-list-icon-trash" }}>
            <FaTrashAlt />
          </IconContext.Provider>
        </button>
      ),
      className: "column6 post",
    },
  ];

  render() {
    const { posts, onSort, sortColumn, comments } = this.props;
    return (
      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <TableHeader
                  onSort={onSort}
                  sortColumn={sortColumn}
                  columns={this.columns}
                />
                <TableBody data={posts} columns={this.columns} />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostsTable;
