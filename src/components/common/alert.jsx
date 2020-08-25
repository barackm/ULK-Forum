import React from "react";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
function AppAlert({
  title = "Alert",
  visible,
  onHide,
  message,
  onAccept,
  acceptMessage = "Confirm",
}) {
  const handleAccept = () => {
    onAccept();
    onHide();
  };
  return (
    <>
      <div
        onClick={onHide}
        className={visible ? "modal-back-ground visible" : "modal-back-ground"}
      ></div>
      <div
        className={
          visible ? "alert-main-wrapper visible" : "alert-main-wrapper"
        }
      >
        <div className="alert-main-header">
          <h3 className="alert-title">{title}</h3>
          <div className="alert-close" onClick={onHide}>
            <IconContext.Provider value={{ className: "alert-box-icon" }}>
              <FaTimes />
            </IconContext.Provider>
          </div>
        </div>
        <div className="alert-body-wrapper">
          <p>{message}</p>
        </div>
        <div className="alert-modal-footer">
          <span>h</span>
          <div className="alert-btn-wrapper">
            <button className="alert-modal-close-btn" onClick={onHide}>
              Close
            </button>
            {onAccept && (
              <button
                className="alert-modal-close-btn accept"
                onClick={handleAccept}
              >
                {acceptMessage}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppAlert;
