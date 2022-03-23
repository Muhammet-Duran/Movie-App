import React from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Logo from "../..//UI/Logo/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <header className={styles.header__container}>
        <Logo />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
