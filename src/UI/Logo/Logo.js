import React from "react";
// import { MovieSVG } from "./../../assets/index";
import MovieSVG from "./../../assets/MovieSVG";
import styles from "./Logo.module.scss";
// import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <span className={styles.logo__icon}>
        <MovieSVG width="52px" fillColor={"#ffc11d"}></MovieSVG>
      </span>
      <span className={styles.logo__text}>MOVİES</span>
    </a>
  );
};

export default Logo;
