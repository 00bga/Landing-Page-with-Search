import React from "react";
import styles from "./AboutContact.module.css";

function AboutContact() {
  return (
    <>
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
    </>
  );
}

export default AboutContact;
