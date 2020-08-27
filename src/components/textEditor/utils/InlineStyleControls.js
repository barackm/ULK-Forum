import React from "react";
import { INLINE_STYLES } from "./editorElements";
import StyleButton from "../styledButton";

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls inline">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          icon={type.icon}
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
