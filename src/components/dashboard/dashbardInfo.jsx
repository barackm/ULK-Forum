import React, { Component } from "react";
import { GrStorage, GrFacebook } from "react-icons/gr";
import { IconContext } from "react-icons/";
import { FiRefreshCw, FiUsers } from "react-icons/fi";
import { BsFilePost } from "react-icons/bs";

class DashboardInfo extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-info-wrapper">
        <div className="storage">
          <div className="storage-header">
            <div className="storage-icon-wrapper">
              <IconContext.Provider
                value={{ className: "storage-icon", color: "orange" }}
              >
                <GrStorage />
              </IconContext.Provider>
            </div>
            <div className="storage-content-wrapper">
              <span>Capacity</span>
              <h2>280GB</h2>
            </div>
          </div>
          <div className="storage-footer">
            <IconContext.Provider value={{ className: "footer-icon" }}>
              <FiRefreshCw />
            </IconContext.Provider>
            <span>Updated now</span>
          </div>
        </div>
        <div className="storage">
          <div className="storage-header">
            <div className="storage-icon-wrapper">
              <IconContext.Provider
                value={{ className: "storage-icon", color: "orange" }}
              >
                <FiUsers />
              </IconContext.Provider>
            </div>
            <div className="storage-content-wrapper">
              <span>Users</span>
              <h2>520</h2>
            </div>
          </div>
          <div className="storage-footer">
            <IconContext.Provider value={{ className: "footer-icon" }}>
              <FiRefreshCw />
            </IconContext.Provider>
            <span>Updated now</span>
          </div>
        </div>

        <div className="storage">
          <div className="storage-header">
            <div className="storage-icon-wrapper">
              <IconContext.Provider value={{ className: "storage-icon post" }}>
                <BsFilePost />
              </IconContext.Provider>
            </div>
            <div className="storage-content-wrapper">
              <span>Posts</span>
              <h2>2000</h2>
            </div>
          </div>
          <div className="storage-footer">
            <IconContext.Provider value={{ className: "footer-icon" }}>
              <FiRefreshCw />
            </IconContext.Provider>
            <span>Updated now</span>
          </div>
        </div>
        <div className="storage">
          <div className="storage-header">
            <div className="storage-icon-wrapper">
              <IconContext.Provider
                value={{ className: "storage-icon", color: "dodgerblue" }}
              >
                <GrFacebook />
              </IconContext.Provider>
            </div>
            <div className="storage-content-wrapper">
              <span>Followers</span>
              <h2>120</h2>
            </div>
          </div>
          <div className="storage-footer">
            <IconContext.Provider value={{ className: "footer-icon" }}>
              <FiRefreshCw />
            </IconContext.Provider>
            <span>Updated now</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardInfo;
