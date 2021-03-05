import React from "react";
import style from "./index.module.css";
function Button({ children, type, onClick, btnStyle, btnSize, btnRadius }) {
  const STYLES = ["danger", "success", "outline-danger", "transparent"];
  const SIZES = ["small", "medium"];
  const RADIUS = ["rounded-1", "rounded-2"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : "success";
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : "medium";
  const checkBtnRadius = RADIUS.includes(btnRadius) ? btnRadius : "rounded-1";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.component} ${style[checkBtnStyle]} ${style[checkBtnSize]} ${style[checkBtnRadius]}`}
    >
      {children}
    </button>
  );
}

export default Button;
