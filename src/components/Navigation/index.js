import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <div className={styles["logo-and-nav"]}>
        <a href="" className={styles["logo"]}>
          Landing<span>Page</span>
        </a>
        <div className={styles["navigation-items"]}>
          <a className={styles["navigation-item"]}>Home</a>
          <a className={styles["navigation-item"]}>Overview</a>
          <a className={styles["navigation-item"]}>About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
