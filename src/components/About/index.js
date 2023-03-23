import React from "react";
import styles from "./About.module.css";
import AboutDescription from "./AboutDescription";
import AboutLinks from "./AboutLinks";
import AboutContact from "./AboutContact";
import AboutSocials from "./AboutSocials";
import AboutNewsletter from "./AboutNewsletter";

function About({ scrollToSection }) {
  return (
    <footer>
      <div className={styles["about-left"]}>
        <AboutDescription />
      </div>
      <div className={styles["about-right"]}>
        <div className={styles["wrapper"]}>
          <AboutLinks scrollToSection={scrollToSection} />
        </div>
        <div className={`${styles["about-contact"]} ${styles["wrapper"]}`}>
          <AboutContact />
        </div>
        <div className={styles["about-social-media"]}>
          <AboutSocials />
        </div>
        <div className={styles["about-newsletter__wrapper"]}>
          <AboutNewsletter />
        </div>
      </div>
    </footer>
  );
}

export default About;
