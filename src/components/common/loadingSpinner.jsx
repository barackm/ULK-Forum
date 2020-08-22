import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function LoadingSpinner() {
  return (
    <div>
      <Loader
        type="Bars"
        color="#00a651"
        height={60}
        width={60}
        // timeout={3000} //3 secs
      />
    </div>
  );
}
