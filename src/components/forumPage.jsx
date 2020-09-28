import React, { Component } from "react";
// import { toast } from "react-toastify";
// import { stateToHTML } from "draft-js-export-html";
import draftToHtml from "draftjs-to-html";
import { categories } from "../data/posts";
import DiscussionPage from "./discussion/discussionPage";
import LeftMenu from "./leftMenu";
import RichTextEditor from "./textEditor/richTextEditor";
import NavbarForum from "./navbarForum";
import ReactHtmlParser from "react-html-parser";
import AppAlert from "./common/alert";
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
    this.props.onChangeCategory(category);
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
  handleSubmitPost = (data) => {
    const { editorContent: post, category, title } = data;
    let alertMessage = "";
    if (!category) {
      alertMessage += "You have to choose a category for your discussion ,";
      this.setState({ alertMessage });
      this.handleShowAlert();
    }
    if (title.trim().length === 0) {
      alertMessage += "Post title should not be empty ,";
      this.setState({ alertMessage });
      this.handleShowAlert();
    }
    const hashtagConfig = {
      trigger: "#",
      separator: " ",
    };
    const directional = false;

    const html = draftToHtml(post, directional, hashtagConfig);

    this.setState({ currentText: html });
  };
  handleChangeCategory = () => {
    this.setState({ categoriesModalShown: !this.state.categoriesModalShown });
  };
  handlHideCategoryModal = () => {
    this.setState({ categoriesModalShown: false });
  };
  handleShowAlert = () => {
    this.setState({ showAlert: true });
  };
  handleHideAlert = () => {
    this.setState({ showAlert: false });
  };

  getFilteredCategories = (category, posts) => {
    if (!category || Object.keys(category).length === 0) return posts;
    return posts.filter((post) => post.categoryId === category._id);
  };

  render() {
    const {
      // background: backgroundColor,
      // categorySelected,
      showTagsCategorieModal,
      // category,
      alertMessage,
      showAlert,
      categoriesModalShown,
      currentText,
    } = this.state;

    const {
      onToggleMenu,
      categorySelected,
      searchValue,
      onResetSeachQuery,
      background: backgroundColor,
      category,
    } = this.props;
    console.log("category selected", categorySelected);
    return (
      <div className="forum-page-wrapper">
        {/* <div style={{ marginTop: 100 }}>{ReactHtmlParser(currentText)}</div> */}
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
              category={category}
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
            <DiscussionPage
              onResetSeachQuery={onResetSeachQuery}
              category={category}
              searchValue={searchValue}
            />
          </div>
        </div>
        {this.state.showEditor && (
          <RichTextEditor
            style={{ marginLeft: 50 }}
            onSubmit={this.handleSubmitPost}
            onCloseCategorie={this.handleCloseTagsCategoriesModal}
            onShowCategories={this.handleShowTagsCategoriesModal}
            categoriesShown={showTagsCategorieModal}
            showEditor={!this.state.showEditor}
            onHideEditor={this.handleHideEditor}
          />
        )}
        <AppAlert
          message={alertMessage}
          title="Alert"
          onHide={this.handleHideAlert}
          visible={showAlert}
        />
      </div>
    );
  }
}

export default ForumPage;
