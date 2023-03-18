import React from "react";
import styles from "./About.module.css";

function About({ scrollToSection }) {
  return (
    <footer>
      <div className={styles["about-left"]}>
        <h3>About</h3>
        <div className={styles["about-text"]}>
          <p>
            Cupidatat irure laborum non quis minim ut ut. Quis esse ullamco sint
            aute velit magna nisi commodo sit aliqua adipisicing ad in
            reprehenderit. In nulla laborum anim non dolore cillum nostrud magna
            sint cupidatat laboris magna. Ipsum exercitation duis consectetur
            sunt ipsum eiusmod laboris consequat ut nostrud mollit incididunt.
          </p>
        </div>
      </div>
      <div className={styles["about-right"]}>
        <div className={styles["wrapper"]}>
          <h3>Quick Links</h3>
          <div className={styles["about-links"]}>
            <a
              onClick={() => scrollToSection("home")}
              href="javascript:void(0)"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("overview")}
              href="javascript:void(0)"
            >
              Overview
            </a>
          </div>
        </div>
        <div className={`${styles["about-contact"]} ${styles["wrapper"]}`}>
          <h3>Contact</h3>
          <div className={styles["about-contact-details"]}>
            <div className={`${styles["about-phone"]} ${styles["contact"]}`}>
              <img src="/assets/phone-call.svg" alt="phone icon"></img>
              <p>(010) 123 456 789</p>
            </div>
            <div className={`${styles["about-mail"]} ${styles["contact"]}`}>
              <img src="/assets/mail.svg" alt="mail icon"></img>
              <p>info@landingpage.com</p>
            </div>
            <div className={`${styles["about-location"]} ${styles["contact"]}`}>
              <img src="/assets/marker.svg" alt="pin icon"></img>
              <p>Esse ad elit occaecat.</p>
            </div>
          </div>
        </div>
        <div className={styles["about-social-media"]}>
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
        </div>
        <div className={styles["about-newsletter__wrapper"]}>
          <div className={styles["about-newsletter"]}>
            <h3>Subscribe to our newsletter</h3>
            <div className={styles["newsletter-input"]}>
              <input type="email" placeholder="Email Adress"></input>
              <div className={styles["newsletter-send"]}>
                <img src="/assets/baseline-send.svg" alt="send icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default About;
