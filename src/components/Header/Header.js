import React from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Logo from "../..//UI/Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
