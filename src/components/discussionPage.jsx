import React, { Component } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { BsCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GoCheck } from "react-icons/go";
import DiscussionList from "./discussionList";
import { posts, users, categories } from "../data/posts";
import LoadingSpinner from "./common/loadingSpinner";

class DiscussionPage extends Component {
  state = {
    selectedCategory: "Latest",
    showCategories: false,
    users: [],
    posts: null,
    categories: [],
  };

  componentDidMount() {
    this.setState({ users, posts, categories });
    const element = document.querySelector(".drop-down-links");
    const bottom =
      element.getBoundingClientRect().y -
      element.getBoundingClientRect().bottom;
    if (bottom < 0) {
      element.classList.add("bottom");
    } else {
      element.classList.remove("bottom");
    }
  }

  handlChangeCategory = (category) => {
    this.setState({ selectedCategory: category.name, showCategories: false });
  };
  handleShowCategories = () => {
    this.setState({ showCategories: !this.state.showCategories });
  };
  filteredCategories = (category, posts) => {
    console.log("the cattegory", Object.keys(category).length);
    if (!category || Object.keys(category).length === 0) return posts;
    return posts.filter((post) => post.categoryId === category.id);
  };
  render() {
    const categories1 = [
      { id: 1, name: "Latest" },
      { id: 3, name: "Top" },
      { id: 2, name: "Newest" },
      { id: 4, name: "Oldest" },
    ];
    const {
      selectedCategory,
      showCategories,
      users,
      posts,
      categories,
    } = this.state;
    const { category } = this.props;
    const dropdownBtnClasses = showCategories
      ? "dropdown-btn toggled"
      : "dropdown-btn";

    const newPosts = this.filteredCategories(category, posts);
    return (
      <div className="discussion-page-wrapper">
        <div className="discussion-page-header">
          <div className={dropdownBtnClasses}>
            <span
              className="drop-down-toggle"
              onClick={this.handleShowCategories}
            >
              {selectedCategory}
              <IconContext.Provider value={{ className: "chevron-icon" }}>
                <BsCaretDownFill />
              </IconContext.Provider>
            </span>
            <ul className="drop-down-links">
              {categories1.map((c) => (
                <li key={c.id} onClick={() => this.handlChangeCategory(c)}>
                  <div className="check-icon-wrapper">
                    {selectedCategory === c.name && (
                      <IconContext.Provider value={{ className: "check-icon" }}>
                        <GoCheck />
                      </IconContext.Provider>
                    )}
                  </div>
                  <span className="drop-down-item">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-btn">
            <IconContext.Provider value={{ className: "refresh-icon" }}>
              <FiRefreshCw />
            </IconContext.Provider>
          </div>
        </div>
        <div className="discussion-list-wrapper">
          {posts ? (
            <DiscussionList
              users={users}
              categories={categories}
              posts={newPosts}
            />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    );
  }
}

export default DiscussionPage;
