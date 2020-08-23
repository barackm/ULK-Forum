import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class UserChartBehevior extends Component {
  render() {
    var dataPie = {
      labels: ["62%", "32%", "6%"],
      series: [62, 32, 6],
    };

    return (
      <div className="users-behavior-wrapper ">
        <div className="ct-chart">
          <ChartistGraph data={dataPie} type="Pie" />
        </div>
      </div>
    );
  }
}

export default UserChartBehevior;
