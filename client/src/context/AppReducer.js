import {
  FETCH_PHOTOS,
  ADD_PHOTO,
  DELETE_PHOTO,
  TOGGLE_ADD_PHOTO,
  TOGGLE_DELETE_PHOTO,
  GET_PHOTO_ID,
} from "../constants";

export default function AppReducer(state, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    case TOGGLE_ADD_PHOTO:
      return {
        ...state,
        addPhotoVisible: action.payload,
      };
    case TOGGLE_DELETE_PHOTO:
      return {
        ...state,
        deletePhotoVisible: action.payload,
      };
    case GET_PHOTO_ID:
      return {
        ...state,
        photoId: action.payload,
      };
    default:
      return state;
  }
}
