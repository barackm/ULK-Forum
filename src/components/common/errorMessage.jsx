import React from "react";
import { useFormikContext } from "formik";

const ErrorMessage = ({ visible = false, message }) => {
  return visible ? <span className="error-message">{message}</span> : "";
};

export default ErrorMessage;
