import React, { Component } from "react";

import DashboardInfo from "./dashbardInfo";
import UserChart from "./usersChart";

class DashboardStatistics extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-statistics-main-wrapper">
        <div className="statistics-wrapper">
          <div className="statistics-header">
            <DashboardInfo />
          </div>
          <div className="first-users-charts">
            <UserChart />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardStatistics;
