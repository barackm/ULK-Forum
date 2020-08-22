import React from "react";
import { EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import Editor from "draft-js-plugins-editor";
import { IoIosSend } from "react-icons/io";
import { FaQuoteLeft, FaRegEdit, FaMinus, FaTimes } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { BsCodeSlash, BsTypeBold } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import createMathjaxPlugin from "draft-js-mathjax-plugin";
import createEmojiPlugin from "draft-js-emoji-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import mentionsStyles from "./mentionsStyles.css";
import "draft-js-hashtag-plugin/lib/plugin.css";

import "./mentionsStyles.css";

import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "draft-js-mention-plugin";
import "draft-js-mention-plugin/lib/plugin.css";
// import mentions from "./mentions";
import {
  AiOutlineOrderedList,
  AiOutlineFontColors,
  AiOutlineCompress,
} from "react-icons/ai";
import { IconContext } from "react-icons";
import { RiFullscreenLine } from "react-icons/ri";
import "../../../node_modules/draft-js/dist/Draft.css";
import "../../../node_modules/draft-js-image-plugin/lib/plugin.css";
import "./editerStyles.css";
import StyleButton from "./styledButton";
import HeaderStyle from "./headerStyle";
import TagsCategoriesModal from "../modals/tagsCategoriesModal";
import CustomOption from "./customBtn";
import { users } from "../../data/posts";
import Entry from "./mentionEntry";
import mentions from "./mentions";
import { FaPaperPlane } from "react-icons/fa";
// import positionSuggestions from "./positionSuggestion";
// import Entry from "./suggestionEntry";

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fullScreen: false,
      suggestions: mentions,
      editorReduced: false,
      closeEdior: false,
      selectedTag: "",
      newSuggestions: [],
    };

    this.mathjaxPlugin = createMathjaxPlugin();
    this.focus = () => this.refs.editor.focus();
    this.emojiPlugin = createEmojiPlugin();
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.linkifyPlugin = createLinkifyPlugin();
    this.imagePlugin = createImagePlugin();
    this.hashtagPlugin = createHashtagPlugin();
    this.mentionPlugin = createMentionPlugin();
    // mentions,
    // entityMutability: "IMMUTABLE",
    // // theme: mentionsStyles,
    // positionSuggestions,
    // mentionPrefix: "@",
    // supportWhitespace: true,
  }
  componentDidMount() {
    const suggestions = this.handlGetMentionUsers(users);
    this.setState({ suggestions });
    const makeResizableDiv = () => {
      const element = document.querySelector(".RichEditor-root");
      const resizer = document.querySelector(".resize-div");
      resizer.addEventListener("mousedown", function (e) {
        e.preventDefault();
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
      });

      const resize = (e) => {
        element.style.height =
          100 + (element.getBoundingClientRect().bottom - e.pageY) + "px";
      };

      function stopResize() {
        window.removeEventListener("mousemove", resize);
      }
    };

    makeResizableDiv();
    const mentions = document.querySelector(".mentions-suggestions-wrapper");
    console.log(mentions.getBoundingClientRect().bottom);
  }
  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }
  _handleFullScreenMode = () => {
    this.setState({ fullScreen: !this.state.fullScreen, editorReduced: false });
  };
  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(
        value,
        this.handlGetMentionUsers(users)
      ),
    });
  };
  handleReduceEditor = () => {
    this.setState({ editorReduced: !this.state.editorReduced });
  };
  onAddMention = (mention) => {
    console.log(mention);
  };

  handleHideEditor = () => {
    this.props.onHideEditor();
    this.setState({ editorReduced: false, closeEdior: !this.state.closeEdior });
  };

  handleShowCategories = () => {
    this.setState({ editorReduced: false });
  };
  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(
        value,
        this.handlGetMentionUsers(users)
      ),
    });
  };
  focus = () => {
    this.editor.focus();
  };
  handleSubmitTag = (tag) => {
    this.setState({ selectedTag: tag });
  };
  handleSubmit = () => {
    this.props.onSubmit();
  };
  handlGetMentionUsers = (users) => {
    const newUsersMentions = [];
    users.map((user) => {
      return newUsersMentions.push({
        ...user,
        name: user.firstName,
        link: user.imageUrl,
        avatar: user.imageUrl,
      });
    });

    return newUsersMentions;
  };
  render() {
    // const newMentions = this.handlGetMentionUsers(users);

    const {
      editorState,
      fullScreen,
      editorReduced,
      closeEdior,
      selectedTag,
    } = this.state;
    const { MentionSuggestions } = this.mentionPlugin;
    const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin;
    // const {  } = this.imagePlugin;
    const plugins = [
      this.mentionPlugin,
      this.emojiPlugin,
      this.imagePlugin,
      this.hashtagPlugin,
      this.linkifyPlugin,
      // this.mathjaxPlugin,
    ];
    const {
      showEditor,
      onCloseCategorie,
      categoriesShown,
      onShowCategories,
      style,
    } = this.props;

    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    const editorClasses = !fullScreen
      ? "RichEditor-root"
      : "RichEditor-root full-screen";
    const newClasses = editorReduced
      ? "reduced " + editorClasses
      : editorClasses;
    const closeEditorClasses = closeEdior ? newClasses + " closed" : newClasses;
    const editorStyle = {
      transform: showEditor ? "translateY(200vh)" : "translateY(0vh)",
      ...style,
    };

    return (
      <>
        <div className={closeEditorClasses} style={editorStyle}>
          <div
            className="resize-div"
            style={{ cursor: fullScreen && "cursor" }}
          ></div>

          <div className="editor-category-section">
            <div className="input-category-wrapper">
              <div className="category-style-wrapper">
                <div
                  className={selectedTag ? "category selected" : "category"}
                  onClick={onShowCategories}
                >
                  {selectedTag ? (
                    <span
                      className="editor-selectedTag"
                      style={{ backgroundColor: selectedTag.color }}
                    >
                      {selectedTag.name}
                    </span>
                  ) : (
                    <span>choose a category</span>
                  )}
                </div>
              </div>
              <div className="input-style-wrapper">
                <div className="input-title-wrapper">
                  <input type="text" placeholder="Enter dicussion Title" />
                </div>
              </div>
            </div>
            <div className="editor-modal-controlls">
              <div className="btn reduce-btn" onClick={this.handleReduceEditor}>
                <IconContext.Provider value={{ className: "edito-modal-icon" }}>
                  <FaMinus />
                </IconContext.Provider>
              </div>
              <div
                className="btn full-screen-btn"
                onClick={this._handleFullScreenMode}
              >
                <IconContext.Provider value={{ className: "edito-modal-icon" }}>
                  {fullScreen ? <AiOutlineCompress /> : <RiFullscreenLine />}
                </IconContext.Provider>
              </div>
              <div className="send-cancel">
                <div className="btn cancel-btn" onClick={this.handleHideEditor}>
                  <IconContext.Provider
                    value={{ className: "edito-modal-icon" }}
                  >
                    <FaTimes />
                  </IconContext.Provider>
                </div>
                <div className="send-btn-icon" onClick={this.handleHideEditor}>
                  <IconContext.Provider
                    value={{ className: "edito-modal-icon send" }}
                  >
                    <FaPaperPlane />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Type your message here..."
              // ref={(element) => {
              //   console.log(element);
              //   this.editor = element;
              // }}
              ref="editor"
              plugins={plugins}
              spellCheck={true}
            />
            <div className="mentions-suggestions-wrapper">
              <MentionSuggestions
                onSearchChange={this.onSearchChange}
                suggestions={this.state.suggestions}
                onAddMention={this.onAddMention}
                entryComponent={Entry}
              />
            </div>
          </div>

          <div className="controls-wrapper">
            <div className="send-btn-wrapper">
              <div className="send-btn" onClick={this.handleSubmit}>
                <IconContext.Provider
                  value={{ className: "text-editor-icon-send" }}
                >
                  <IoIosSend />
                </IconContext.Provider>
                <span>Post</span>
              </div>
            </div>
            <div className="controls">
              <HeaderStyle
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />
            </div>
            <EmojiSelect />
            <CustomOption editorState={editorState} onChange={this.onChange} />
            <EmojiSuggestions />
          </div>
        </div>
        <TagsCategoriesModal
          shown={categoriesShown}
          onClose={onCloseCategorie}
          onSubmitTag={this.handleSubmitTag}
          selectedTag={selectedTag}
        />
      </>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 14,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

const BLOCK_TYPES = [
  { label: "Blockquote", style: "blockquote", icon: <FaQuoteLeft /> },
  { label: "UL", style: "unordered-list-item", icon: <MdFormatListBulleted /> },
  { label: "OL", style: "ordered-list-item", icon: <AiOutlineOrderedList /> },
  { label: "Code Block", style: "code-block", icon: <BsCodeSlash /> },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          icon={type.icon}
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <BsTypeBold /> },
  { label: "Italic", style: "ITALIC", icon: <FiItalic /> },
  { label: "Underline", style: "UNDERLINE", icon: <AiOutlineFontColors /> },
  { label: "Monospace", style: "CODE", icon: <FaRegEdit /> },
];

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

export default RichTextEditor;
