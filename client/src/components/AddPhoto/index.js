import React, { useContext, useState } from "react";
import Button from "../Button";
import { GlobalContext } from "../../context/GlobalState";
import Modal from "../Modal";
import style from "./index.module.css";

function AddPhoto() {
  const { addPhoto, toggleAddPhoto, addPhotoVisible } = useContext(
    GlobalContext
  );
  const [photo, setPhoto] = useState({ label: "", url: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    addPhoto(photo);
  };
  return addPhotoVisible ? (
    <Modal>
      <form onSubmit={handleSubmit} className={style.component}>
        <div>
          <h1>Add a new photo</h1>
        </div>
        <div>
          <div>
            <label htmlFor="label">Label</label>
            <input
              type="text"
              id="lable"
              onChange={(e) => setPhoto({ ...photo, label: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="url">Photo URL</label>
            <input
              type="text"
              id="lable"
              onChange={(e) => setPhoto({ ...photo, url: e.target.value })}
            />
          </div>
        </div>
        <div>
          <Button
            btnStyle="transparent"
            btnSize="medium"
            onClick={toggleAddPhoto}
          >
            Cancel
          </Button>
          <Button
            btnSize="medium"
            btnStyle="success"
            btnRadius="rounded-1"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  ) : null;
}

export default AddPhoto;
