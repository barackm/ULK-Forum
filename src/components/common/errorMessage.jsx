import React from "react";

const ErrorMessage = ({ visible = false, message }) => {
  return visible ? <span className="error-message">{message}</span> : "";
};

export default ErrorMessage;
