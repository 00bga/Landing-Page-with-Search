import React from "react";
import styles from "./AboutNewsletter.module.css";

function AboutNewsletter() {
  return (
    <>
      <div className={styles["about-newsletter"]}>
        <h3>Subscribe to our newsletter</h3>
        <div className={styles["newsletter-input"]}>
          <input type="email" placeholder="Email Adress"></input>
          <a className={styles["newsletter-send"]} href="">
            <img src="/assets/baseline-send.svg" alt="send icon"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutNewsletter;
