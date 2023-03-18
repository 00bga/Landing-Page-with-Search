import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles["search-button"]}>
      <img src="/assets/icons8-search.svg" alt="search icon"></img>
    </div>
  );
}

export default Search;
