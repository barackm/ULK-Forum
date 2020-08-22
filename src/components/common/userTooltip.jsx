import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoMdTime } from "react-icons/io";
import ColorLuminance from "../utils/getDarkenLihtenColor";
class UserTooltip extends Component {
  state = {};

  render() {
    const color = "#fc427b";
    const classes = this.props.visible
      ? "user-tooltip-wrapper visible"
      : "user-tooltip-wrapper";

    const { user } = this.props;
    return (
      <>
        {user && (
          <div
            onMouseLeave={this.props.onMouseLeave}
            className={classes}
            style={{ backgroundColor: ColorLuminance(user.color, -0.5) }}
          >
            <div className="user-tool-tip-profile">
              <Link
                to={`/profile/${user.id}`}
                className="user"
                style={{ backgroundColor: user.color }}
              >
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt=""
                    srcSet=""
                    className="user-tool-tip-img"
                  />
                ) : (
                  <span>{user.initial}</span>
                )}
              </Link>
            </div>
            <div className="user-tool-tip-details">
              <Link to={`/profile/${user.id}`} className="name">
                {user.firstName + " " + user.lastName}
              </Link>
              <div className="posted-at">
                <IconContext.Provider
                  value={{ className: "user-tool-tip-icon" }}
                >
                  <IoMdTime />
                </IconContext.Provider>
                <span>16 Hours ago</span>
                <h3>Joined April 20, 2020</h3>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default UserTooltip;
