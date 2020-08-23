import React from "react";

import "./mentionsStyles.css";

const Entry = (props) => {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    isFocused, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps} className="main-suggestion-wrapper">
      <div className="suggestion-container">
        <div className="suggestion-img">
          <img
            src={mention.avatar}
            className={theme.mentionSuggestionsEntryAvatar}
            role="presentation"
            alt=""
          />
        </div>

        <div className="suggestion-details-wrapper">
          <h3>{mention.name}</h3>

          <span>{mention.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Entry;
