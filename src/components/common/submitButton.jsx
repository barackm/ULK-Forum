import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="submit-btn-wrapper">
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
