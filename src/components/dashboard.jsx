import React, { Component } from "react";
import DashboardSidebar from "./dashboardSidebar";
import DashboardStatistics from "./dashboardStatistics";
import UsersList from "./usersList";
import DashboardNavbar from "./dashboardNavbar";

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
    const { onToggleMenu } = this.props;
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
            selectedLink={selectedLink}
            onSelectLink={this.handlSelectLink}
            navbarToggled={navbarToggled}
            onHideNavbar={this.handlHideNavbar}
          />
        </div>
        <div className="dashboard-main">
          {/* <DashboardStatistics /> */}
          <UsersList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
