import React, { Component } from "react";
import { Modifier, EditorState } from "draft-js";
import PropTypes from "prop-types";

class CustomOption extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

  addStar = (e) => {
    e.preventDefault();
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      "@",
      editorState.getCurrentInlineStyle()
    );
    onChange(EditorState.push(editorState, contentState, "insert-characters"));
  };

  render() {
    return (
      <div onMouseDown={this.addStar} className="add-mention-btn">
        @
      </div>
    );
  }
}

export default CustomOption;
