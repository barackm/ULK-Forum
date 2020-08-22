import React from "react";
class Entry extends React.Component {
  componentDidMount() {
    const element = document.querySelector(".mention-main-wrapper");
    const right =
      element.getBoundingClientRect().x - element.getBoundingClientRect().right;
    if (right < 0) {
      element.classList.add("right");
    } else {
      element.classList.remove("right");
    }
  }
  render() {
    const {
      mention,
      theme,
      searchValue, // eslint-disable-line no-unused-vars
      isFocused, // eslint-disable-line no-unused-vars
      ...parentProps
    } = this.props;

    const styles = {};
    return (
      <div {...parentProps} className="mention-main-wrapper" style={styles}>
        <div className="mention-secondary-wrapper">
          <div
            className="mention-image-wrapper"
            style={{ backgroundColor: mention.color }}
          >
            {mention.imageUrl ? (
              <img
                src={mention.avatar}
                className="mention-image"
                role="presentation"
                alt={mention.initial}
              />
            ) : (
              <span>{mention.initial}</span>
            )}
          </div>

          <div className="mention-details-wrapper">
            <div className="mention-name">{mention.name}</div>
            <div className="mention-title">{mention.lastName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
