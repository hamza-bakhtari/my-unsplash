import { createContext, useReducer } from "react";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  FETCH_PHOTOS,
  GET_PHOTO_ID,
  TOGGLE_ADD_PHOTO,
  TOGGLE_DELETE_PHOTO,
} from "../constants";

import AppReducer from "./AppReducer";

const initialState = {
  photos: [],
  photoId: null,
  addPhotoVisible: false,
  deletePhotoVisible: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchPhotos = async () => {
    try {
      let response = await fetch(`http://localhost:5000/api/photos`, {
        method: "GET",
      });

      let { data: photos, isSuccess, message } = await response.json();

      if (!isSuccess) throw new Error(message);

      dispatch({ type: FETCH_PHOTOS, payload: photos });
    } catch (error) {
      console.error(error);
    }
  };

  const addPhoto = async (photo) => {
    try {
      let response = await fetch(`http://localhost:5000/api/photos/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(photo),
      });

      let { data: photoResult, message, isSuccess } = await response.json();

      console.log(message, isSuccess, photoResult);

      if (!isSuccess) throw new Error(message);

      dispatch({ type: ADD_PHOTO, payload: photoResult });
    } catch (error) {
      console.error(error);
    }
  };

  const deletePhoto = async (id, password) => {
    try {
      let response = await fetch(`http://localhost:5000/api/photos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      });

      let { Message, IsSuccess } = await response.json();

      if (!IsSuccess) throw new Error(Message);

      dispatch({ type: DELETE_PHOTO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotoId = (id) => dispatch({ type: GET_PHOTO_ID, payload: id });

  const toggleAddPhoto = () =>
    dispatch({
      type: TOGGLE_ADD_PHOTO,
      payload: !state.addPhotoVisible,
    });
  const toggleDeletePhoto = () =>
    dispatch({
      type: TOGGLE_DELETE_PHOTO,
      payload: !state.deletePhotoVisible,
    });

  return (
    <GlobalContext.Provider
      value={{
        photos: state.photos,
        addPhotoVisible: state.addPhotoVisible,
        deletePhotoVisible: state.deletePhotoVisible,
        photoId: state.photoId,
        fetchPhotos,
        addPhoto,
        deletePhoto,
        toggleAddPhoto,
        toggleDeletePhoto,
        getPhotoId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
