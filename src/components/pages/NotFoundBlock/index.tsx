import React from "react";
import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

export default function () {
  return (
    <div className={styles.root}>
      <h1>
        <span>😒</span>
        <br />
        Ничего не найдено {":("}
      </h1>
      <p>К сожалению данная страница не найдена</p>
    </div>
  );
}
