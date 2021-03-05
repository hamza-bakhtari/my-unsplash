import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/my_unsplash_logo.svg";
import Button from "../Button";
import Container from "../../common/Container";
import { GlobalContext } from "../../context/GlobalState";
import Search from "../Search";
import style from "./index.module.css";

function Header({ toggleAddPhotoForm }) {
  const { toggleAddPhoto } = useContext(GlobalContext);
  return (
    <Container>
      <header className={style.component}>
        <Logo />
        <Search />
        <Button
          btnSize="btn--lg"
          btnRadius="btn-rounded--sm"
          onClick={toggleAddPhoto}
        >
          Add a photo
        </Button>
      </header>
    </Container>
  );
}

export default Header;
