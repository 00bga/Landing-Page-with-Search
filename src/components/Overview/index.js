import React from "react";
import styles from "./Overview.module.css";

function Overview() {
  return (
    <div className={styles["overview"]}>
      <div className={styles["overview-description-wrapper"]}>
        <div className={styles["overview-description"]}>
          <h1 className={styles["overview-title"]}>
            Est non in labore cupidatat
            <span> voluptate nulla</span>
          </h1>
          <p className={styles["overview-text"]}>
            Commodo ad incididunt aliqua pariatur ut sint irure magna magna
            velit. Id commodo cillum ex dolor ullamco adipisicing et sunt
            nostrud aliqua proident pariatur.
          </p>
          <button className={styles["overview-button"]}>Get Started</button>
        </div>
      </div>
      <div className={styles["overview-image"]}>
        <img src="/assets/image.png"></img>
      </div>
    </div>
  );
}

export default Overview;
