import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
// import { colourOptions } from "../data";
const animatedComponents = makeAnimated();

class PostReport extends Component {
  state = {
    selectedOptions: [],
  };
  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions: selectedOptions || [] });
  };
  handleSubmit = () => {
    this.props.onSubmitReport(this.state.selectedOptions);
    this.props.onCloseReportModal();
  };
  render() {
    const { showReportModal, onCloseReportModal, target } = this.props;
    const { selectedOptions } = this.state;
    const colourOptions = [
      { value: "Exam-cheat", label: "Exam cheat" },
      { value: "Nudity", label: "Nudity" },
      { value: "Violence", label: "Violence" },
      { value: "Harasment", label: "Harasment" },
      { value: "Suicide-or-self-injury", label: "Suicide or self-injury" },
      { value: "Terrorism", label: "Terrorism" },
    ];

    return (
      <>
        <div
          className={
            showReportModal
              ? "post-reporting-main-wrapper toggled"
              : "post-reporting-main-wrapper"
          }
        >
          <div className="post-reporting-header">
            <h4>Tell us about what you think of this {target}</h4>
          </div>
          <div className="close-btn-report" onClick={onCloseReportModal}>
            <IconContext.Provider value={{ className: "reporting-close-icon" }}>
              <FaTimes />
            </IconContext.Provider>
          </div>
          <div className="port-reporting-select-wrapper">
            <Select
              styles={{ width: "100%" }}
              onCloseModal={this.handleCloseModal}
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={this.handleChange}
              isMulti
              options={colourOptions}
            />
          </div>
          <div className="post-reporting-footer">
            <div className="report-btn-wrapper">
              <div className="post-reporting-btn" onClick={this.handleSubmit}>
                <span>Send Report</span>
              </div>
              {selectedOptions.length === 0 ? (
                <div className="post-report-send"></div>
              ) : (
                ""
              )}
            </div>

            <h5>We promise to take into account your report</h5>
          </div>
        </div>
        {showReportModal && (
          <div
            className="post-reporting-back-ground"
            onClick={onCloseReportModal}
          ></div>
        )}
      </>
    );
  }
}

export default PostReport;
