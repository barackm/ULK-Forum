import React, { Component } from "react";

import { IconContext } from "react-icons";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

class DashboardSidebar extends Component {
  state = {};
  links = [
    {
      _id: 1,
      name: "Dashboard",
      path: `${this.props.match.url}/`,
      icon: <AiOutlineDashboard />,
    },
    {
      _id: 2,
      name: "Users",
      path: `${this.props.match.url}/users/`,
      icon: <FiUsers />,
    },
    {
      _id: 3,
      name: "Notifications",
      path: `${this.props.match.url}/notifications/`,
      icon: <IoMdNotificationsOutline />,
    },
    {
      _id: 4,
      name: "Posts",
      path: `${this.props.match.url}/posts/`,
      icon: <TiDocumentText />,
    },
  ];
  render() {
    const { navbarToggled, onSelectLink, selectedLink } = this.props;
    return (
      <div
        className={
          navbarToggled
            ? "dashboard-sidebar-main-wrapper"
            : "dashboard-sidebar-main-wrapper toggled"
        }
      >
        <div className="dashboard-container">
          <div className="dashboard-sidebar-header">
            <div className="profile-wrapper">
              <img
                src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-5.jpg"
                alt=""
                srcSet=""
              />
            </div>
            <span>Dashboard</span>
          </div>
          <div className="dashboard-sidebar-links">
            {this.links.map((l) => (
              <Link
                to={l.path}
                key={l._id}
                className={
                  selectedLink === l.name
                    ? "link-dashboard active-link"
                    : "link-dashboard"
                }
                onClick={() => onSelectLink(l)}
              >
                <IconContext.Provider
                  value={{ className: "dashboard-icon-link" }}
                >
                  {l.icon}
                </IconContext.Provider>
                <span>{l.name}</span>
              </Link>
            ))}
          </div>
          {/* <div className="dashboard-sidebar-footer">
            <div to="/" className="link-dashboard active end">
              <IconContext.Provider
                value={{ className: "dashboard-icon-link" }}
              >
                <AiOutlineRocket />
              </IconContext.Provider>
              <span>Remove as Admin</span>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default DashboardSidebar;
