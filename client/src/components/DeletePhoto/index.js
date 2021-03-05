import React, { useContext, useState } from "react";
import style from "./index.module.css";
import Modal from "../Modal";
import Button from "../Button";
import { GlobalContext } from "../../context/GlobalState";

function DeletePhoto() {
  const {
    deletePhoto,
    toggleDeletePhoto,
    deletePhotoVisible,
    photoId,
  } = useContext(GlobalContext);
  const [password, setPassword] = useState({ password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    deletePhoto(photoId, password);
  };
  return deletePhotoVisible ? (
    <Modal>
      <form className={style.component} onSubmit={handleSubmit}>
        <div>
          <h1>Are you sure?</h1>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password: p@55word</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword({ password: e.target.value })}
            />
          </div>
        </div>
        <div>
          <Button
            btnSize="medium"
            btnStyle="transparent"
            onClick={toggleDeletePhoto}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            btnStyle="danger"
            btnSize="medium"
            btnRadius="rounded-1"
          >
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  ) : null;
}

export default DeletePhoto;
