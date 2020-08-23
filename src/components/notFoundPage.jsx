import React, { Component } from "react";
import { Link } from "react-router-dom";

import notFound from "../data/svgs/404.svg";
import meteor from "../data/svgs/meteor.svg";
import astronaut from "../data/svgs/astronaut.svg";
import spaceship from "../data/svgs/spaceship.svg";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found-page-main-wrapper">
        <div className="mars"></div>
        <img src={notFound} className="logo-404" alt="1" />
        <img src={meteor} className="meteor" alt="1" />
        <p className="title">Oh no!!</p>
        <p className="subtitle">
          You’re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align="center">
          <Link className="btn-back" to="/">
            Back to previous page
          </Link>
        </div>
        <img src={astronaut} className="astronaut" alt="1" />
        <img src={spaceship} className="spaceship" alt="" />{" "}
      </div>
    );
  }
}
// brouwserline
export default NotFoundPage;
