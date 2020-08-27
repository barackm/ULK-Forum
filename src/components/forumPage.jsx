import React, { Component } from "react";
import { toast } from "react-toastify";
import { stateToHTML } from "draft-js-export-html";
import draftToHtml from "draftjs-to-html";
import { categories } from "../data/posts";
import DiscussionPage from "./discussion/discussionPage";
import LeftMenu from "./leftMenu";
import RichTextEditor from "./textEditor/richTextEditor";
import NavbarForum from "./navbarForum";
import ReactHtmlParser from "react-html-parser";
class ForumPage extends Component {
  state = {
    background: "",
    categorySelected: "",
    showEditor: false,
    showTagsCategorieModal: false,
    category: {},
    categoriesModalShown: false,
    currentText: "",
  };
  handleChangeBtnColor = (category) => {
    this.setState({
      background: category.color,
      categorySelected: category.name,
      category,
    });
  };
  handleToggleEditor = () => {
    this.setState({ showEditor: !this.state.showEditor });
  };
  handleShowEditor = () => {
    this.setState({ showEditor: true });
  };
  handleHideEditor = () => {
    this.setState({ showEditor: false });
  };
  handleShowTagsCategoriesModal = () => {
    this.setState({
      showTagsCategorieModal: !this.state.showTagsCategorieModal,
    });
  };
  handleCloseTagsCategoriesModal = () => {
    this.setState({ showTagsCategorieModal: false });
  };
  handleSubmitPost = (post) => {
    const hashtagConfig = {
      trigger: "#",
      separator: " ",
    };
    const directional = false;
    // const customEntityTransform=
    const html = draftToHtml(post, hashtagConfig, directional);
    this.setState({ currentText: html });
  };
  handleChangeCategory = () => {
    this.setState({ categoriesModalShown: !this.state.categoriesModalShown });
  };
  handlHideCategoryModal = () => {
    this.setState({ categoriesModalShown: false });
  };
  render() {
    const {
      background: backgroundColor,
      categorySelected,
      showTagsCategorieModal,
      category,
      categoriesModalShown,
    } = this.state;
    const { onToggleMenu } = this.props;
    // const { onShowCategories, categoriesShown, onCloseCategorie } = this.props;
    return (
      <div className="forum-page-wrapper">
        {showTagsCategorieModal ? (
          <div
            onClick={this.handleCloseTagsCategoriesModal}
            className="back-shed-category"
          ></div>
        ) : (
          ""
        )}

        <div
          className={
            categorySelected ? "category-selected visible" : "category-selected"
          }
          style={{ backgroundColor }}
        >
          {categorySelected && <h1>{categorySelected}</h1>}
        </div>

        <div className="forum-page-secondary-wrapper">
          <div className="forum-sidenav">
            <LeftMenu
              categoriesModalShown={categoriesModalShown}
              categories={categories}
              onColorChange={this.handleChangeBtnColor}
              onShowEditor={this.handleToggleEditor}
              onHideModal={this.handlHideCategoryModal}
            />
            <div className="navbar-forum">
              <NavbarForum
                onShowEditor={this.handleShowEditor}
                categorySelected={categorySelected}
                onChangeCategory={this.handleChangeCategory}
                onToggleMenu={onToggleMenu}
              />
            </div>
          </div>
          <div className="forum-body-wrapper">
            <DiscussionPage category={category} />
          </div>
        </div>
        <RichTextEditor
          style={{ marginLeft: 50 }}
          onSubmit={this.handleSubmitPost}
          onCloseCategorie={this.handleCloseTagsCategoriesModal}
          onShowCategories={this.handleShowTagsCategoriesModal}
          categoriesShown={showTagsCategorieModal}
          showEditor={!this.state.showEditor}
          onHideEditor={this.handleHideEditor}
        />
      </div>
    );
  }
}

export default ForumPage;
