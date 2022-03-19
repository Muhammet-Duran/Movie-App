import React from "react";
import styles from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.movie__btn}>
      {children}
    </button>
  );
};

export default Button;
