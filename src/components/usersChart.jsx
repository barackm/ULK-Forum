import React, { Component } from "react";
import ChartistGraph from "react-chartist";
class UserChart extends Component {
  state = {};
  render() {
    var dataSales = {
      labels: [
        "9:00AM",
        "12:00AM",
        "3:00PM",
        "6:00PM",
        "9:00PM",
        "12:00PM",
        "3:00AM",
        "6:00AM",
      ],
      series: [
        [287, 385, 490, 492, 554, 586, 698, 695],
        [67, 152, 143, 240, 287, 335, 435, 437],
        [23, 113, 67, 108, 190, 239, 307, 308],
      ],
    };
    var optionsSales = {
      low: 0,
      high: 800,
      showArea: false,
      height: "245px",
      axisX: {
        showGrid: false,
      },
      lineSmooth: true,
      showLine: true,
      showPoint: true,
      fullWidth: true,
      chartPadding: {
        right: 50,
      },
    };
    var responsiveSales = [
      [
        "screen and (max-width: 640px)",
        {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];

    var dataBar = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
      ],
    };
    var optionsBar = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false,
      },
      height: "245px",
    };
    var responsiveBar = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    return (
      <div className="users-chart-wrapper">
        <div className="first-chart">
          <div className="chart-details">
            <h3>Users behavior</h3>
            <span>24 Hours performance</span>
          </div>
          <div className="ct-chart">
            <ChartistGraph
              data={dataBar}
              type="Bar"
              options={optionsBar}
              responsiveOptions={responsiveBar}
            />
          </div>
          <div className="chart-legend">
            <span></span> <h4>Active</h4> <span></span> <h4>Open</h4>
          </div>
        </div>
        <div className="last-chart">
          <div className="chart-details">
            <h3>Posts</h3>
            <span>24 Hours performance</span>
          </div>
          <div className="ct-chart">
            <ChartistGraph
              data={dataSales}
              type="Line"
              options={optionsSales}
              responsiveOptions={responsiveSales}
            />
          </div>
          <div className="chart-legend">
            <span></span> <h4>Active</h4> <span></span> <h4>Open</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserChart;
