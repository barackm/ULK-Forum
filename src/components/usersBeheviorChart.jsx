import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class UserChartBehevior extends Component {
  state = {};
  render() {
    var dataPie = {
      labels: ["62%", "32%", "6%"],
      series: [62, 32, 6],
    };
    // Data for Line Chart
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

    // Data for Bar Chart
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
      <div className="users-behavior-wrapper ">
        <div className="ct-chart">
          <ChartistGraph data={dataPie} type="Pie" />
        </div>
      </div>
    );
  }
}

export default UserChartBehevior;
