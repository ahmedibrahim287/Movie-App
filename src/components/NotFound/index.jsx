import React, { Fragment } from "react";
import styles from "./error.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.errorWrapper}>
          <div className={styles.manIcon}></div>
          <h3 className={styles.title}>404</h3>
          <p className={styles.info}>Oh! you insert wrong data</p>
          <Link type="button" className={styles.homeBtn} to="/">
            Back to Home again
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
