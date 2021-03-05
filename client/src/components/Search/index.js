import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import style from "./index.module.css";

function Search() {
  return (
    <form className={style.component}>
      <SearchIcon />
      <input type="text" placeholder="Search by name" />
    </form>
  );
}

export default Search;
