import React from "react";
import dontknow from "./../../assets/dontknow.gif";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.gif__area}>
      <img src={dontknow} alt="NotFound" width="400px" />
    </div>
  );
};

export default NotFound;
