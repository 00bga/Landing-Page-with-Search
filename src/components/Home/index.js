import React from "react";
import styles from "./Home.module.css";
import RepositoryPreview from "../RepositoryPreview";
import { Route, Routes } from "react-router-dom";

function Home(props) {
  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles["home"]}>
        <h2>Where would you like to go?</h2>
        <div className={styles["home-search"]}>
          <div className={styles["home-input"]}>
            <input
              placeholder="Search for repositories..."
              value={props.searchString}
              onChange={props.handleSearchInputChange}
            />
            {props.searchResults.length !== 0 && (
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <RepositoryPreview
                      searchResults={props.searchResults}
                      setSelectedRepository={props.setSelectedRepository}
                    />
                  }
                ></Route>
              </Routes>
            )}
          </div>
          <div className={styles["home-search-button"]}>
            <img src="/assets/icons8-search.svg" alt="search icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
