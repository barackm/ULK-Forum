import React, { Component } from "react";

class AuthLinks extends Component {
  state = {};
  render() {
    const { onShowSignUpModal, onShowLoginModal } = this.props;
    return (
      <div className="nav-buttons-container">
        <span className="login-btn" onClick={onShowLoginModal}>
          Log in
        </span>
        <span className="sign-up-btn" onClick={onShowSignUpModal}>
          Sign up
        </span>
      </div>
    );
  }
}

export default AuthLinks;
