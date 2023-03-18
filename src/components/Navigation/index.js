import React from "react";
import styles from "./Navigation.module.css";
import Search from "../Search";

function Navigation({ scrollToSection }) {
  return (
    <nav>
      <div className={styles["logo-and-nav"]}>
        <a href="javascript:void(0)" className={styles["logo"]}>
          Landing<span>Page</span>
        </a>
        <div className={styles["navigation-items"]}>
          <a
            className={styles["navigation-item"]}
            onClick={() => scrollToSection("home")}
            href="javascript:void(0)"
          >
            Home
          </a>
          <a
            className={styles["navigation-item"]}
            onClick={() => scrollToSection("overview")}
            href="javascript:void(0)"
          >
            Overview
          </a>
          <a
            className={styles["navigation-item"]}
            onClick={() => scrollToSection("about")}
            href="javascript:void(0)"
          >
            About
          </a>
        </div>
      </div>
      <div className={styles["search"]}>
        <input placeholder="Search..."></input>
        <Search />
      </div>
    </nav>
  );
}

export default Navigation;
