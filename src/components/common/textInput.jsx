import React, { useState } from "react";
import { useFormikContext } from "formik";
import { IconContext } from "react-icons";
import { BsEyeFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

import ErrorMessage from "./errorMessage";

const TextInput = ({ placeholder, name, type = "text", icon, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const newInputType = type === "password" && !showPassword ? type : "text";

  return (
    <div className="text-input-wrapper">
      <div className="text-input">
        <div className="text-input-icon-wrapper">
          {icon && (
            <IconContext.Provider value={{ className: "input-icon" }}>
              {icon}
            </IconContext.Provider>
          )}
        </div>
        <div className="text-input-input">
          <input
            {...rest}
            placeholder={placeholder}
            name={name}
            type={newInputType}
            onChange={handleChange}
            onBlur={() => setFieldTouched(name)}
          />
        </div>
        {type === "password" && (
          <div onClick={handleShowPassword} className="password-icon-wrapper">
            <IconContext.Provider value={{ className: "password-hiden-icon" }}>
              {showPassword ? <BsEyeFill /> : <AiFillEyeInvisible />}
            </IconContext.Provider>
          </div>
        )}
      </div>
      <ErrorMessage visible={touched[name]} message={errors[name]} />
    </div>
  );
};

export default TextInput;
// https://github.com/mosh-hamedani/vidly-api-node
