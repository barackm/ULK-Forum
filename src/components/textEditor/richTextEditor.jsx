import React from "react";
import {
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import { IoIosSend } from "react-icons/io";
import { FaMinus, FaTimes } from "react-icons/fa";

import createMathjaxPlugin from "draft-js-mathjax-plugin";
import createEmojiPlugin from "draft-js-emoji-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "draft-js-mention-plugin";
import "draft-js-mention-plugin/lib/plugin.css";
import { AiOutlineCompress } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FaPaperPlane } from "react-icons/fa";
import { RiFullscreenLine } from "react-icons/ri";
import HeaderStyle from "./headerStyle";
import TagsCategoriesModal from "../modals/tagsCategoriesModal";
import CustomOption from "./customBtn";
import { users, categories } from "../../data/posts";
import Entry from "./mentionEntry";
import BlockStyleControls from "./utils/BlockStyleControls";
import InlineStyleControls from "./utils/InlineStyleControls";
import getBlockStyle from "./utils/getBlockStyle";

import "../../../node_modules/draft-js/dist/Draft.css";
import "../../../node_modules/draft-js-image-plugin/lib/plugin.css";
import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-hashtag-plugin/lib/plugin.css";
import "./mentionsStyles.css";
import "./editerStyles.css";
import styleMap from "./utils/styleMap";
import truncatedStr from "../utils/getTruncatedString";
import { truncate } from "lodash";

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      fullScreen: false,
      editorReduced: false,
      closeEdior: false,
      selectedTag: null,
      newSuggestions: [],
      postTitle: "",
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
  }
  componentDidMount() {
    this.handleOpenEditorWithContent();
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
  }
  handleOpenEditorWithContent = () => {
    const post = this.props.defaultContent;
    if (post) {
      const category = categories.filter((c) => c._id === post.categoryId);
      const title = post.title;
      console.log("post title", title);

      this.setState({
        selectedTag: category[0],
        postTitle: title,
      });
    } else {
      this.setState({ selectedTag: null });
    }
  };
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
  onAddMention = (mention) => {};

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
  handleChangePostTitle = (e) => {
    this.setState({ postTitle: e.target.value });
  };
  handleSubmit = () => {
    const { selectedTag, postTitle } = this.state;
    const data = {
      editorContent: this.handleExtractData(this.state.editorState),
      category: selectedTag,
      title: postTitle,
    };
    this.props.onSubmit(data);
  };

  handleExtractData = (state) => {
    const contentState = state.getCurrentContent();
    return convertToRaw(contentState);
  };
  handlGetMentionUsers = (users) => {
    const newUsersMentions = [];
    users.map((user) => {
      return newUsersMentions.push({
        ...user,
        name: user.userName,
        link: `/profile/${user.userName}`,
        avatar: user.imageUrl,
      });
    });

    return newUsersMentions;
  };
  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    const {
      editorState,
      fullScreen,
      editorReduced,
      closeEdior,
      selectedTag,
      postTitle,
    } = this.state;
    const { MentionSuggestions } = this.mentionPlugin;
    const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin;
    const plugins = [
      this.mentionPlugin,
      this.emojiPlugin,
      this.imagePlugin,
      this.hashtagPlugin,
      this.linkifyPlugin,
    ];
    const {
      showEditor,
      onCloseCategorie,
      categoriesShown,
      onShowCategories,
      style,
      comment,
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
    console.log(selectedTag);
    return (
      <>
        <div className={closeEditorClasses} style={editorStyle}>
          <div
            className="resize-div"
            style={{ cursor: fullScreen && "cursor" }}
          ></div>
          <div
            className={
              comment
                ? "editor-category-section comment"
                : "editor-category-section"
            }
          >
            {comment && <div className="editor-backward">{comment()}</div>}
            {!comment && (
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
                    <input
                      value={postTitle}
                      type="text"
                      placeholder="Enter dicussion Title"
                      onChange={this.handleChangePostTitle}
                    />
                  </div>
                </div>
              </div>
            )}
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
                {comment && (
                  <div className="editor-backward hide">{comment()}</div>
                )}
                <div className="send-btn-icon" onClick={this.handleSubmit}>
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
              handleKeyCommand={this._handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Type your message here..."
              ref="editor"
              // handleKeyCommand={this.handleKeyCommand.bind(this)}
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

export default RichTextEditor;
