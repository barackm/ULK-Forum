import React, { Component } from "react";
import "../styles/aboutPage.css";
import AboutHomePage from "./aboutHome";
import AboutNavbar from "./aboutNavbar";
// import Images from "./images";
// import Slider from "./slider";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-wrapper">
        <AboutNavbar />
        <AboutHomePage />
        <div style={{ width: "100%", height: 600 }}></div>
        {/* <Slider images={Images} /> */}
      </div>
    );
  }
}

export default AboutPage;
