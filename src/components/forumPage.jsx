import React, { Component } from "react";
import LeftMenu from "./leftMenu";
import DiscussionPage from "./discussionPage";
import RichTextEditor from "./textEditor/richTextEditor";
import { categories } from "../data/posts";
import { toast } from "react-toastify";
import NavbarForum from "./navbarForum";
class ForumPage extends Component {
  state = {
    background: "",
    categorySelected: "",
    showEditor: false,
    showTagsCategorieModal: false,
    category: {},
    categoriesModalShown: false,
  };
  handleChangeBtnColor = (category) => {
    this.setState({
      background: category.color,
      categorySelected: category.name,
      category,
    });
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
  handleSubmitPost = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
            className="back-shed"
          ></div>
        ) : (
          ""
        )}
        {categorySelected && (
          <div className="category-selected" style={{ backgroundColor }}>
            <h1>{categorySelected}</h1>
          </div>
        )}
        <div className="forum-page-secondary-wrapper">
          <div className="forum-sidenav">
            <LeftMenu
              categoriesModalShown={categoriesModalShown}
              categories={categories}
              onColorChange={this.handleChangeBtnColor}
              onShowEditor={this.handleShowEditor}
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
