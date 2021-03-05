import React, { useContext } from "react";
import Button from "../Button";
import { GlobalContext } from "../../context/GlobalState";
import style from "./index.module.css";

function Photo({ url, label, id }) {
  const { toggleDeletePhoto, getPhotoId } = useContext(GlobalContext);

  const handleDelete = () => {
    getPhotoId(id);
    toggleDeletePhoto();
  };
  return (
    <figure className={style.component}>
      <img src={url} alt="" />
      <figcaption>{label}</figcaption>
      <Button
        btnStyle="outline-danger"
        btnSize="small"
        btnRadius="rounded-2"
        onClick={handleDelete}
      >
        delete
      </Button>
    </figure>
  );
}

export default Photo;
