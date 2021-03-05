import React from "react";
import style from "./index.module.css";

function Modal({ children }) {
  return (
    <>
      <div className={style.component}></div>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Modal;
