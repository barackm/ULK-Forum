import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IconContext } from "react-icons/";
import { users } from "../data/posts";
import { GrSearch } from "react-icons/gr";
class UsersList extends Component {
  state = {};
  render() {
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
                <input type="text" placeholder="Search user" />
              </div>
            </div>
          </div>
          <div className="users-list-table">
            <div className="limiter">
              <div className="container-table100">
                <div className="wrap-table100">
                  <div className="table100">
                    <table>
                      <thead>
                        <tr className="table100-head">
                          <th className="column1">Name</th>
                          <th className="column2">Last Name</th>
                          <th className="column3">Jioned at</th>
                          <th className="column4">Posts</th>
                          <th className="column5">Admin</th>
                          <th className="column6">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="table-space">
                            <td className="column1">2017-09-29 01:22</td>
                            <td className="column2">200398</td>
                            <td className="column3">iPhone X 64Gb Grey</td>
                            <td className="column4">$999.00</td>
                            <td className="column5">
                              <button className="table-btn">Make admin</button>
                            </td>
                            <td className="column6">
                              <button className="table-btn delete">
                                <IconContext.Provider
                                  value={{ className: "users-list-icon-trash" }}
                                >
                                  <FaTrashAlt />
                                </IconContext.Provider>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersList;
