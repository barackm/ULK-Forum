import React, { Component } from "react";
import * as Yup from "yup";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";

import ModalHeader from "./modalHeader";
import AppForm from "../common/appForm";
import TextInput from "../common/textInput";
import SubmitButton from "../common/submitButton";

class SignupModal extends Component {
  validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    userName: Yup.string().min(3).required().label("Name"),
    password: Yup.string().min(4).required().label("Password"),
  });
  render() {
    const { onClose, shown, onOpenLoginModal } = this.props;
    const styles = {
      transform: shown ? "scale(1)" : "scale(0.7)",
      opacity: shown ? 1 : 0,
      visibility: shown ? "visible" : "hidden",
    };
    const modalContainerStyle = {
      display: shown ? "inline" : "none",
    };

    return (
      <div className="login-modal" style={modalContainerStyle}>
        <div className="modal">
          <div className="login-modal-wrapper signup" style={styles}>
            <div className="login-modal-container">
              <div className="modal-header">
                <ModalHeader title="Sign Up" onClose={onClose} />
              </div>
              <div className="modal-body">
                <div className="login-with0">
                  <div className="login-with-google-btn">
                    <IconContext.Provider
                      value={{ className: "login-google-icon" }}
                    >
                      <FcGoogle />
                    </IconContext.Provider>
                    <span>Login with Google</span>
                  </div>
                </div>
                <div className="modal-body-input-wrapper">
                  <AppForm
                    initialValues={{
                      email: "",
                      password: "",
                      userName: "",
                    }}
                    validationSchema={this.validationSchema}
                    onSubmit={(values) => console.log("form submited")}
                  >
                    <TextInput
                      placeholder="User name"
                      name="userName"
                      icon={<FaUserGraduate />}
                    />

                    <TextInput
                      placeholder="Email"
                      name="email"
                      icon={<MdEmail />}
                    />
                    <TextInput
                      placeholder="Password"
                      name="password"
                      type="password"
                      icon={<RiLockPasswordLine />}
                    />
                    <div className="remember-me-wrapper">
                      <input
                        id="checkbox-1"
                        className="checkbox-custom"
                        name="checkbox-1"
                        type="checkbox"
                      />
                    </div>
                    <div></div>
                    <SubmitButton />
                  </AppForm>
                </div>
              </div>
              <div className="modal-footer">
                <div className="password-forgotten">
                  <div className="already-have-account">
                    <span>Already have an account?</span>{" "}
                    <label onClick={onOpenLoginModal}>Login</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
