import React from "react";
import Typed from "react-typed";
export default function AboutHome() {
  return (
    <div className="about-home-page-main-wrapper">
      <div className="backshel-about"></div>
      <div className="right-text-wrapper">
        <h5>
          <Typed
            strings={["Lorem, ipsum dolor sit amet"]}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
        </h5>
      </div>
      <div>
        <br />
        <div className="main-home-code-wrapper">
          <div className="home-code-wrapper-header">
            <div className="home-code-dots">
              <div className="code-dot red"></div>
              <div className="code-dot orange"></div>
              <div className="code-dot green"></div>
            </div>
            <div className="home-code-title">
              <span>ULK Forum</span>
            </div>
            <span className="right-code">h</span>

            <div className="container">
              <div className="glitch" data-text="CYBERCOUNTESS">
                <span>&lt;html&gt;</span>
                <br />
                <di className="code-wrapper">
                  <span>&lt;head&gt;</span>
                  <div className="title-wrapper">
                    <span>&lt;title&gt;</span> Universite libre de Kigali{" "}
                    <span>&lt;/title&gt;</span>
                  </div>
                  <span>&lt;/head&gt;</span>
                  <br />
                  <span>&lt;body&gt;</span>
                  <div className="body-wrapper">
                    <span>&lt;div&gt;</span>
                    <br />
                    <div className="body-div-wrapper">
                      <span>&lt;h1&gt;</span>
                      <Typed
                        strings={["Here you can find anything"]}
                        typeSpeed={100}
                      />

                      <span>&lt;/h1&gt;</span>
                      <br />
                      <span>&lt;p&gt;</span>
                      <Typed
                        strings={[
                          "Search for products",
                          "Search for categories",
                          "Search for brands",
                        ]}
                        typeSpeed={100}
                        backSpeed={70}
                        loop
                      ></Typed>
                      <span>&lt;/p&gt;</span>
                      <br />
                    </div>
                    <span>&lt;/div&gt;</span>
                  </div>
                  <span>&lt;/body&gt;</span>

                  <br />
                </di>
                <span>&lt;/html &gt;</span>
              </div>
              {/* <div className="glow"></div> */}
            </div>
            <div className="scanlines"></div>
          </div>
        </div>
      </div>
      <div className="snow-container">{/* <Snow /> */}</div>
      {/* <p className="subtitle">Engineer﹒Gamer﹒Shenaniganizer</p> */}
    </div>
  );
}
