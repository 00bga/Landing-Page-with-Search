import React from "react";
import styles from "./AboutLinks.module.css";

function AboutLinks({ scrollToSection }) {
  return (
    <>
      <h3>Quick Links</h3>
      <div className={styles["about-links"]}>
        <a onClick={() => scrollToSection("home")} href="javascript:void(0)">
          Home
        </a>
        <a
          onClick={() => scrollToSection("overview")}
          href="javascript:void(0)"
        >
          Overview
        </a>
      </div>
    </>
  );
}

export default AboutLinks;
