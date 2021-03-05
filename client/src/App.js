import React from "react";
import "./App.css";
import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import { GlobalProvider } from "./context/GlobalState";
import AddPhoto from "./components/AddPhoto";
import DeletePhoto from "./components/DeletePhoto";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <PhotoList />
      <AddPhoto />
      <DeletePhoto />
    </GlobalProvider>
  );
}

export default App;
