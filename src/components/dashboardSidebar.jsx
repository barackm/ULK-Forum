import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineDashboard, AiOutlineRocket } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";

class DashboardSidebar extends Component {
  state = {};
  links = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <AiOutlineDashboard />,
    },
    { id: 2, name: "Users", path: "/dashboard", icon: <FiUsers /> },
    {
      id: 3,
      name: "Notifications",
      path: "/dashboard",
      icon: <IoMdNotificationsOutline />,
    },
    { id: 4, name: "Posts", path: "/dashboard", icon: <TiDocumentText /> },
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
              <NavLink
                to={l.path}
                key={l.id}
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
              </NavLink>
            ))}
          </div>
          {/* <div className="dashboard-sidebar-footer">
            <NavLink to="/" className="link-dashboard active end">
              <IconContext.Provider
                value={{ className: "dashboard-icon-link" }}
              >
                <AiOutlineRocket />
              </IconContext.Provider>
              <span>Remove as Admin</span>
            </NavLink>
          </div> */}
        </div>
      </div>
    );
  }
}

export default DashboardSidebar;
