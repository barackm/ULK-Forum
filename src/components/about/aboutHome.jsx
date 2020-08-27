// import React, { useState, useEffect } from "react";
// import { useTransition, animated, config } from "react-spring";
// import "./styles.css";

// const slides = [
//   {
//     id: 0,
//     url:
//       "photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i",
//   },
//   {
//     id: 1,
//     url:
//       "photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80",
//   },
//   {
//     id: 2,
//     url: "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80",
//   },
// ];
// const texts = [
//   {
//     id: 0,
//     text: "Lorem ipsum dolor sit amet.",
//   },
//   { id: 1, text: "  consectetur adipisicing." },
//   { id: 2, text: " Lorem ipsum dolor sit amet, consec" },
// ];
// const AboutHomePage = () => {
//   const [index, set] = useState(0);
//   const [text, setText] = useState(0);
//   const transitions = useTransition(slides[index], (item) => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   });
//   const transitionsText = useTransition(texts[text], (item) => item.id, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: config.molasses,
//   });
//   useEffect(() => {
//     void setInterval(() => setText((state) => (state + 1) % 3), 4000);
//     void setInterval(() => set((state) => (state + 1) % 3), 4000);
//   }, []);
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{
//         ...props,
//         backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
//       }}
//     >
//       {transitionsText.map(({ item, props, key }) => (
//         <animated.div
//           key={key}
//           class="bg"
//           style={{
//             ...props,
//           }}
//         >
//           <div className="home-text-wrapper">
//             <h1> {item.text}</h1>
//           </div>
//         </animated.div>
//       ))}
//     </animated.div>
//   ));
// };

// export default AboutHomePage;

import React from "react";
import { useEffect } from "react";
import Particles from "react-particles-js";
import Goo from "./animation";
import TextTransition, { presets } from "react-text-transition";
// import "./homeBtn";
export default function AboutHome() {
  const [index, setIndex] = React.useState(0);
  const TEXTS = ["We are the ", "We trust the", "Work for the "];
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
  }, []);
  return (
    <div className="about-home-page-main-wrapper">
      <div className="about-home-text">
        <h1 className="home-about-text">
          <TextTransition
            delay={0}
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.molasses}
          />
          {"   "}
          <span>future</span>
        </h1>
      </div>
      <div id="wrapper">
        <div id="wrapper-inner">
          <div id="scroll-down">
            <span class="arrow-down"></span>
            <span id="scroll-title">Scroll down</span>
          </div>
        </div>
      </div>
      {/* <Goo /> */}
    </div>
  );
}
