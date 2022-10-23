import React from "react";

const Modal = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <div
      onClick={props.closeOnOutsideClick ? props.onClose : () => {}}
      className="bg-black bg-opacity-10 flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 z-[100]">
      <div
        className="bg-secondaryGreen p-3 rounded-md"
        onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
