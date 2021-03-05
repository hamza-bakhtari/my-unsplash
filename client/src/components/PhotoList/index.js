import React, { useContext, useEffect } from "react";
import Photo from "../Photo";
import Container from "../../common/Container";
import style from "./index.module.css";
import { GlobalContext } from "../../context/GlobalState";

function PhotoList({ toggleDeletePhotoForm }) {
  const { photos, fetchPhotos } = useContext(GlobalContext);

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className={style.component}>
        {photos.map((photo) => (
          <Photo
            url={photo.url}
            label={photo.label}
            key={photo.id}
            id={photo.id}
          />
        ))}
      </div>
    </Container>
  );
}

export default PhotoList;
