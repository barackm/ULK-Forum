import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { FaTimes, FaMinus } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IconContext } from "react-icons";
import { RiFullscreenLine } from "react-icons/ri";

import CustomOption from "../customBtn";
import toolbar from "../config";
import { users } from "../../../data/posts";
import "./newEditor.css";

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    users: [],
  };
  constructor() {
    super();
    this.setEditorReference = (ref) => {
      this.editorReferece = ref;
      ref.focus();
    };
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount() {
    this.convertUsers(users);
  }
  convertUsers = (users) => {
    users.map((user) => {
      console.log(user);
      return this.setState({
        users: [
          ...this.state.users,
          {
            ...user,
            text: user.firstName,
            value: user.firstName,
            url: user.imageUrl,
          },
        ],
      });
    });
  };
  render() {
    const { editorState, users } = this.state;
    console.log(users);
    return (
      <div className="new-editor-wrapper">
        <div className="new-editor-header">
          <div className="left-controls">
            <div className="catagory-mobile">
              <div className="new-editor-category-btn">
                <span>Choose Category</span>
              </div>
            </div>
            <div className="input-title-mobile">
              <div className="dicussion-title-wrapper">
                <input
                  type="text"
                  placeholder="Choose a Title for your Discussion"
                />
              </div>
            </div>
          </div>
          <div className="new-editor-control-btn">
            <div className="new-publish-btn">
              <IconContext.Provider value={{ className: "publish-btn-new" }}>
                <IoIosSend />
              </IconContext.Provider>
              <span>Publish</span>
            </div>
            <div className="reduce-new-btn reduce-icon">
              <IconContext.Provider value={{ className: "new-editor-icon" }}>
                <FaMinus />
              </IconContext.Provider>
            </div>
            <div className="reduce-new-btn full-screen-icon">
              <IconContext.Provider value={{ className: "new-editor-icon" }}>
                <RiFullscreenLine />
              </IconContext.Provider>
            </div>
            <div className="reduce-new-btn">
              <IconContext.Provider value={{ className: "new-editor-icon" }}>
                <FaTimes />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          editorRef={this.setEditorReference}
          toolbar={toolbar}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: this.state.users,
          }}
          hashtag={{
            separator: " ",
            trigger: "#",
          }}
          toolbarCustomButtons={[<CustomOption />]}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;
