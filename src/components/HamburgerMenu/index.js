import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <div className={styles["menu-bar"]}>
        <div
          className={`${styles.menu} ${isMenuOpen ? styles.change : ""}`}
          onClick={toggleMenu}
        >
          <div className={`${styles.bar1} ${styles.bar}`}></div>
          <div className={`${styles.bar2} ${styles.bar}`}></div>
          <div className={`${styles.bar3} ${styles.bar}`}></div>
        </div>
        <ul
          className={`${styles.nav} ${isMenuOpen ? styles.change : ""}`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div
        className={`${styles["menu-bg"]} ${
          isMenuOpen ? styles["change-bg"] : ""
        }`}
      ></div>
    </div>
  );
}

export default HamburgerMenu;
