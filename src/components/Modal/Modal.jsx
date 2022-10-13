import React, { useEffect } from "react";
import $ from "jquery";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "./Modal.scss";

const Modal = ({
  noOverlay,
  show,
  toggleShow,
  className,
  children,
  onClose,
  ...rest
}) => {
  const closeHandler = () => {
    if (onClose) {
      onClose();
    }

    toggleShow();
  };

  useEffect(() => {
    const activeModalsNum = $(".custom-modal.show").length;

    if (activeModalsNum) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }, [show]);

  return (
    <>
      {!noOverlay && (
        <div
          className={clsx("modal-overlay", { show })}
          onClick={closeHandler}
        />
      )}
      <div className={clsx("custom-modal-wrap", className, { show })} {...rest}>
        <div className={clsx("custom-modal")}>
          <div className="close" onClick={closeHandler}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
