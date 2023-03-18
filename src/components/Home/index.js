import React from "react";
import styles from "./Home.module.css";
import Search from "../Search";

function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles["home"]}>
        <h2>Where would you like to go?</h2>
        <div className={styles["home-search"]}>
          <input placeholder="Search for repositories..."></input>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
