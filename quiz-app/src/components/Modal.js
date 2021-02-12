import React from "react";

const Modal = (props) => {

  return (
      <div className="modal-container">
        {props.children}
        <button className="modalclose" onClick={props.handleModal}>OK</button>
      </div>
  );
};

export default Modal;
