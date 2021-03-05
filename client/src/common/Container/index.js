import React from "react";
import style from "./index.module.css";

function Container({ children }) {
  return <div className={style.component}>{children}</div>;
}

export default Container;
