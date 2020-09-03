import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons/";
import TableHeader from "../common/table/tableHeader";
import TableBody from "../common/table/tableBody";
import { FiExternalLink } from "react-icons/fi";

class UsersTable extends Component {
  state = {};
  columns = [
    {
      id: 1,
      name: "User Name",
      path: "userName",
      className: "column1 ",
    },

    {
      id: 3,
      name: "Joined at",
      path: "joinedAt",
      className: "column3 ",
    },
    {
      id: 4,
      name: "Posts",
      path: "posts",
      className: "column4 ",
    },
    {
      id: 5,
      name: "View Profile",
      content: (user) => (
        <button
          className="table-btn"
          onClick={() => this.props.onViewUser(user)}
        >
          <IconContext.Provider value={{ className: "movies-list-icon-trash" }}>
            <FiExternalLink />
          </IconContext.Provider>
        </button>
      ),
      className: "column5 ",
    },
    {
      id: 6,
      name: "Admin",
      content: (user) => (
        <button
          className="table-btn"
          onClick={() => this.props.onMakeUserAdmin(user)}
        >
          Make admin
        </button>
      ),
      className: "column6 ",
    },

    {
      id: 7,
      name: "Delete",
      content: (user) => (
        <button
          className="table-btn delete"
          onClick={() => this.props.onDeleteUser(user)}
        >
          <IconContext.Provider value={{ className: "movies-list-icon-trash" }}>
            <FaTrashAlt />
          </IconContext.Provider>
        </button>
      ),
      className: "column7 ",
    },
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

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
                <TableBody data={users} columns={this.columns} />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersTable;

{
  /* <td className="column2">{item.lastName}</td>
            <td className="column3">{item.joinedAt}</td>
            <td className="column4">50</td>
            <td className="column5">
              <button className="table-btn">Make admin</button>
            </td>
            <td className="column6">
              <button className="table-btn delete">
                <IconContext.Provider
                  value={{ className: "movies-list-icon-trash" }}
                >
                  <FaTrashAlt />
                </IconContext.Provider>
              </button>
            </td> */
}
