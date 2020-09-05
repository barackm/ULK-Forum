import React, { Component } from "react";
import Podium from "./podium";
class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about-us-page-main-wrapper">
        {/* <div className="about-section-wrapper">
          <h1>hello my wordl</h1>
        </div> */}

        <div className="svg-podium-wrapper">
          <Podium />
        </div>
      </div>
    );
  }
}

export default AboutUs;
