import React, { Component } from "react";
import "./App.css";
import "./components/styles/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/navigation";
import ForumPage from "./components/forumPage";
import Dashboard from "./components/dashboard";
import PostDetails from "./components/postDetails";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginModal from "./components/modals/loginModal";
import SignupModal from "./components/modals/signupModal";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import UserProfile from "./components/userProfile";
import LoadingSpinner from "./components/common/loadingSpinner";
import EditorConvertToHTML from "./components/textEditor/exempleEditor";
import AppAlert from "./components/common/alert";
import NotFoundPage from "./components/notFoundPage";
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
      // showTagsCategorieModal: false,
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
                component={(props) => (
                  <UserProfile
                    {...props}
                    onToggleMenu={this.handleToggleMenu}
                  />
                )}
              ></Route>
              <Route
                path="/dashboard"
                component={(props) => (
                  <Dashboard {...props} onToggleMenu={this.handleToggleMenu} />
                )}
              />
              <Route
                path="/"
                component={(props) => (
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
            {/* <NotFoundPage /> */}
          </main>

          <LoginModal
            onOpenSignupModal={this.handleOpenSignupModal}
            shown={this.state.showLoginModal}
            onClose={this.handleCloseLoginModal}
          />
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
