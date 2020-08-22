import React, { Component } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import * as Yup from "yup";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";

import ModalHeader from "./modalHeader";
import AppForm from "../common/appForm";
import TextInput from "../common/textInput";
import SubmitButton from "../common/submitButton";

const LoginModal = ({ onClose, shown, onOpenSignupModal }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().label("Password"),
  });

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
        <div className="login-modal-wrapper" style={styles}>
          <div className="login-modal-container">
            <div className="modal-header">
              <ModalHeader title="Login" onClose={onClose} />
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
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => console.log(values)}
                >
                  <TextInput
                    placeholder="Email"
                    name="email"
                    icon={<FaUserGraduate />}
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
                    <label
                      htmlFor="checkbox-1"
                      className="checkbox-custom-label"
                    >
                      Remember me
                    </label>
                  </div>

                  <SubmitButton />
                </AppForm>
              </div>
            </div>
            <div className="modal-footer">
              <div className="password-forgotten">
                <div
                  className="already-have-account password"
                  style={{ marginBottom: 15 }}
                >
                  <label className="password-btn">Forgot Password ?</label>
                </div>
                <div className="already-have-account">
                  <span>Don't have an account?</span>{" "}
                  <label onClick={onOpenSignupModal}>Sign Up</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
