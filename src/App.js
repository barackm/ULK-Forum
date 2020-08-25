import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navigation from "./components/navigation";
import ForumPage from "./components/forumPage";
import PostDetails from "./components/post/postDetails";
import LoginModal from "./components/modals/loginModal";
import SignupModal from "./components/modals/signupModal";
import NotFoundPage from "./components/notFoundPage";
import Dashboard from "./components/dashboard/dashboard";
import UserProfile from "./components/profile/userProfile";

import "./App.css";
import "./components/styles/styles.css";
import "./components/styles/navigation.css";
import "./components/styles/forumPage.css";
import "./components/styles/discussionPage.css";
import "./components/styles/dashboard.css";
import "./components/styles/posts.css";
import "./components/styles/comments.css";
import "./components/styles/modals.css";
import "./components/styles/profile.css";
import "./components/styles/mentions.css";
import "./components/styles/main.css";

import "react-toastify/dist/ReactToastify.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AppAlert from "./components/common/alert";

class App extends Component {
  state = {
    showLoginModal: false,
    showSignupModal: false,
    showTagsCategorieModal: false,
    menuToggled: false,
  };
  handleOpenLoginModal = () => {
    const body = document.querySelector("body");
    body.classList.add("modal-open");
    this.setState({
      showLoginModal: true,
      showSignupModal: false,
    });
  };

  handleCloseLoginModal = () => {
    const body = document.querySelector("body");
    body.classList.remove("modal-open");
    this.setState({
      showLoginModal: false,
      showSignupModal: false,
    });
  };
  handleOpenSignupModal = () => {
    this.setState({
      showSignupModal: true,
      showLoginModal: false,
    });
  };

  handleCloseSignupModal = () => {
    this.setState({
      showSignupModal: false,
      showLoginModal: false,
    });
  };

  handleToggleMenu = () => {
    this.setState({ menuToggled: !this.state.menuToggled });
  };
  handleHideMenu = () => {
    this.setState({ menuToggled: false });
  };
  render() {
    const {
      showTagsCategorieModal,
      showSignupModal,
      showLoginModal,
      menuToggled,
    } = this.state;
    return (
      <>
        <ToastContainer />
        <div className="App">
          {showLoginModal || showSignupModal ? (
            <div
              onClick={this.handleCloseLoginModal}
              className="back-shed"
            ></div>
          ) : (
            ""
          )}

          {menuToggled && (
            <div className="back-shed-menu" onClick={this.handleHideMenu}></div>
          )}

          <Navigation
            menuToggled={menuToggled}
            onOpenLoginModal={this.handleOpenLoginModal}
            onOpenSignupModal={this.handleOpenSignupModal}
            onHideMenu={this.handleHideMenu}
          />
          <main className="main-app-wrapper">
            <Switch>
              <Route path="/post/:id" component={PostDetails} />
              <Route
                path="/profile/:userId"
                render={(props) => (
                  <UserProfile
                    {...props}
                    onToggleMenu={this.handleToggleMenu}
                  />
                )}
              ></Route>
              <Route
                path="/dashboard"
                render={(props) => (
                  <Dashboard {...props} onToggleMenu={this.handleToggleMenu} />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <ForumPage
                    {...props}
                    onToggleMenu={this.handleToggleMenu}
                    categoriesShown={showTagsCategorieModal}
                    onCloseCategorie={this.handleCloseTagsCategoriesModal}
                    onShowCategories={this.handleShowTagsCategoriesModal}
                  />
                )}
              />
              <Route path="/not-found" component={NotFoundPage} />
              <Redirect to="/not-found" />
            </Switch>
          </main>

          <LoginModal
            onOpenSignupModal={this.handleOpenSignupModal}
            shown={this.state.showLoginModal}
            onClose={this.handleCloseLoginModal}
          />
          <AppAlert />
          <SignupModal
            onOpenLoginModal={this.handleOpenLoginModal}
            shown={this.state.showSignupModal}
            onClose={this.handleCloseSignupModal}
          />
        </div>
      </>
    );
  }
}

export default App;
