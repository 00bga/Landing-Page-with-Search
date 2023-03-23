import React from "react";
import styles from "./AboutSocials.module.css";

function AboutSocials() {
  return (
    <>
      <h3>Follow Us</h3>
      <div className={styles["about-social-media__buttons"]}>
        <a
          className={styles["social-media"]}
          href="https://www.facebook.com"
          target="_blank"
        >
          <img src="/assets/facebook.png"></img>
        </a>
        <a
          className={styles["social-media"]}
          href="https://www.twitter.com"
          target="_blank"
        >
          <img src="/assets/twitter.png"></img>
        </a>
        <a
          className={styles["social-media"]}
          href="https://www.instagram.com"
          target="_blank"
        >
          <img src="/assets/instagram.png"></img>
        </a>
        <a
          className={styles["social-media"]}
          href="https://www.youtube.com"
          target="_blank"
        >
          <img src="/assets/youtube.png"></img>
        </a>
        <a
          className={styles["social-media"]}
          href="https://www.linkedin.com"
          target="_blank"
        >
          <img src="/assets/linkedin.png"></img>
        </a>
      </div>
    </>
  );
}

export default AboutSocials;
