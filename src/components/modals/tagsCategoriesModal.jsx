import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaCheckSquare, FaCheck } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { categories } from "../../data/posts";
class TagsCategoriesModal extends Component {
  state = {
    selectedTag: null,
    searchQuery: "",
  };
  // categories = [
  //   {
  //     id: 1,
  //     name: "Electronics",
  //     color: "#3498db",
  //   },
  //   {
  //     id: 2,
  //     name: "Computer Science",
  //     color: "#8e44ad",
  //   },
  //   {
  //     id: 3,
  //     name: "Low",
  //     color: "#3498db",
  //   },
  //   {
  //     id: 4,
  //     name: "Civil Engineering",
  //     color: "#FC427B",
  //   },
  //   {
  //     id: 5,
  //     name: "IOT",
  //     color: "#d35400",
  //   },
  //   {
  //     id: 6,
  //     name: "Accounting",
  //     color: "#2ecc71",
  //   },
  //   {
  //     id: 7,
  //     name: "Music",
  //     color: "#3498db",
  //   },
  //   {
  //     id: 8,
  //     name: "Cinema",
  //     color: "#8e44ad",
  //   },
  //   {
  //     id: 9,
  //     name: "Entrepreneuship",
  //     color: "#3498db",
  //   },
  //   {
  //     id: 10,
  //     name: "Theology",
  //     color: "#FC427B",
  //   },
  //   {
  //     id: 11,
  //     name: "Bible",
  //     color: "#d35400",
  //   },
  // ];

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  handleSelectTag = (tag) => {
    this.setState({ selectedTag: tag, searchQuery: "" });
  };
  handleRemoveTag = () => {
    this.setState({ selectedTag: null });
  };
  hanleAddTag = (e) => {
    if (e.key === "Enter") {
      const _selectedTag = categories.filter(
        (c) =>
          c.name.toLocaleLowerCase() ===
          this.state.searchQuery.toLocaleLowerCase()
      );
      this.setState({ selectedTag: _selectedTag[0], searchQuery: "" });
    }
    if (e.key === "Backspace") {
      if (this.state.searchQuery.trim().length === 0) {
        this.setState({ selectedTag: null });
      }
    }
  };
  handleSubmit = () => {
    this.props.onSubmitTag(this.state.selectedTag);
    this.props.onClose();
  };
  render() {
    const { shown, onClose } = this.props;
    const modalStyles = {
      transform: shown ? "translateY(0vh)" : "translateY(-100vh)",
    };
    const containerStyle = {
      transform: shown ? "translateY(0vh)" : "translateY(-100vh)",
    };

    return (
      <div className="tags-categories-modal" style={containerStyle}>
        <div className="tags-modal">
          <div className="tags-modal-content-wrapper" style={modalStyles}>
            <div className="tags-modal-header">
              <div className="tags-modal-title">
                <div className="modal-send-icon" onClick={this.handleSubmit}>
                  <IconContext.Provider
                    value={{ className: "modal-send-icon-tag" }}
                  >
                    <FaCheck />
                  </IconContext.Provider>
                </div>
                <span>Choose a tag for your discussion</span>
                <div className="icon-close-tags-wrapper" onClick={onClose}>
                  <IconContext.Provider
                    value={{ className: "tags-modal-close-icon" }}
                  >
                    <FaTimes />
                  </IconContext.Provider>
                </div>
              </div>
              <div className="modal-tag">
                <div className="tags-modal-input-wrapper">
                  {this.state.selectedTag && (
                    <div
                      className="tag-selected-wrapper"
                      onClick={this.handleRemoveTag}
                    >
                      <span
                        className="selected-tag"
                        style={{
                          backgroundColor: this.state.selectedTag.color,
                        }}
                      >
                        {this.state.selectedTag.name}{" "}
                        <IconContext.Provider
                          value={{ className: "icon-remove-tag" }}
                        >
                          <IoMdCloseCircleOutline />
                        </IconContext.Provider>
                      </span>
                    </div>
                  )}
                  <input
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                    type="text"
                    name="searchQuery"
                    placeholder="Type or select your tag"
                    onKeyUp={this.hanleAddTag}
                  />
                </div>
                <button onClick={this.handleSubmit}>
                  {!this.state.selectedTag && <span></span>} OK
                </button>
              </div>
            </div>
            <ul className="tasg-modal-list" tabIndex="0" role="listbox">
              {this.state.selectedTag ? (
                <li
                  className="tags-item selected"
                  id={this.state.selectedTag.id}
                  onClick={this.handleRemoveTag}
                >
                  <IconContext.Provider
                    value={{
                      className: "selected-tag-icon",
                      color: this.state.selectedTag.color,
                    }}
                  >
                    <FaCheckSquare />
                  </IconContext.Provider>

                  <span
                    className="tag-name"
                    style={{ color: this.state.selectedTag.color }}
                  >
                    {this.state.selectedTag.name}
                  </span>
                </li>
              ) : (
                categories
                  .filter(({ name }) =>
                    name
                      .toLocaleLowerCase()
                      .includes(this.state.searchQuery.toLocaleLowerCase())
                  )
                  .map((c) => (
                    <li
                      className="tags-item"
                      id={c.id}
                      onClick={() => this.handleSelectTag(c)}
                    >
                      {this.state.selectedTag &&
                      this.state.selectedTag.name === c.name ? (
                        <IconContext.Provider
                          value={{
                            className: "selected-tag-icon",
                            color: this.state.selectedTag.color,
                          }}
                        >
                          <FaCheckSquare />
                        </IconContext.Provider>
                      ) : (
                        <div
                          className="tag-box"
                          style={{ backgroundColor: c.color }}
                        ></div>
                      )}

                      <span className="tag-name" style={{ color: c.color }}>
                        {c.name}
                      </span>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TagsCategoriesModal;
