import React, { Component } from "react";
import "../styles/aboutPage.css";
import AboutHomePage from "./aboutHome";
// import AboutNavbar from "./aboutNavbar";
import AboutUs from "./aboutUs";

class AboutPage extends Component {
  state = {};
  componentDidMount() {
    const navbar = document.getElementById("navigation");
    navbar.classList.add("about");
  }
  componentWillUpdate() {
    const navbar = document.getElementById("navigation");
    navbar.classList.remove("about");
  }

  render() {
    return (
      <div className="about-page-main-wrapper">
        {/* <AboutNavbar /> */}
        <AboutHomePage />
        <AboutUs />
        {/* <div style={{ width: "100%", height: 600 }}></div> */}
        {/* <Slider images={Images} /> */}
      </div>
    );
  }
}

export default AboutPage;
