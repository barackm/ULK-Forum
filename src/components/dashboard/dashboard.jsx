import React, { Component } from "react";

import DashboardSidebar from "./dashboardSidebar";
import DashboardStatistics from "./dashboardStatistics";
import DashboardNavbar from "./dashboardNavbar";
import UsersPage from "./usersPage";
import PostsPage from "./postsPage";
import { Route } from "react-router-dom";
// import Switch from "react-bootstrap/esm/Switch";
class Dashboard extends Component {
  state = {
    navbarToggled: false,
    selectedLink: "Dashboard",
  };
  handleToggleNavbar = () => {
    this.setState({ navbarToggled: !this.state.navbarToggled });
  };
  handlHideNavbar = () => {
    this.setState({ navbarToggled: false });
  };
  handlSelectLink = (link) => {
    this.setState({ selectedLink: link.name, navbarToggled: false });
  };
  render() {
    const { navbarToggled, selectedLink } = this.state;
    const { onToggleMenu, match } = this.props;
    return (
      <div className="dashboard-main-wrapper">
        <DashboardNavbar
          selectedLink={selectedLink}
          navbarToggled={navbarToggled}
          onShowNav={this.handleToggleNavbar}
          onHideNavbar={this.handlHideNavbar}
          onToggleMenu={onToggleMenu}
        />
        <div
          className={
            navbarToggled ? "dashboard-sidebar" : "dashboard-sidebar toggled"
          }
        >
          <DashboardSidebar
            match={match}
            selectedLink={selectedLink}
            onSelectLink={this.handlSelectLink}
            navbarToggled={navbarToggled}
            onHideNavbar={this.handlHideNavbar}
          />
        </div>
        <div className="dashboard-main">
          {/* <Switch> */}
          <Route
            exact
            path={`${match.path}/`}
            render={(props) => <DashboardStatistics {...props} />}
          />
          <Route
            exact
            path={`${match.path}/users`}
            render={(props) => <UsersPage {...props} />}
          />
          <Route
            exact
            path={`${match.path}/posts`}
            render={(props) => <PostsPage {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
