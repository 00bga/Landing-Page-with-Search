import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Home from "./components/Home";
import About from "./components/About";
import RepositoryDetails from "./components/RepositoryDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import debounce from "lodash/debounce";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState(null);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }

  const searchGithub = async (query) => {
    try {
      if (!query) {
        setSearchResults([]);
        return;
      }
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  const debouncedSearch = debounce(searchGithub, 500);

  useEffect(() => {
    if (searchString) {
      if (debouncedSearch && typeof debouncedSearch === "function") {
        debouncedSearch(searchString);
      }
    }
  }, [searchString, debouncedSearch]);

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchString(value);
    setSelectedRepository(null);
    if (!value) {
      setSearchResults([]);
    }
  };

  return (
    <BrowserRouter>
      <div className={styles["app"]}>
        <div className={styles["nav"]}>
          <Navigation scrollToSection={scrollToSection} />
        </div>
        <main>
          <section id="home" className={styles["section-home"]}>
            <Home
              searchString={searchString}
              handleSearchInputChange={handleSearchInputChange}
              searchResults={searchResults}
              setSelectedRepository={setSelectedRepository}
              selectedRepository={selectedRepository}
            />
            <Routes>
              <Route
                exact
                path="/repository/:id"
                element={
                  selectedRepository && (
                    <RepositoryDetails repository={selectedRepository} />
                  )
                }
              ></Route>
            </Routes>
          </section>
          <section id="overview" className={styles["section-overview"]}>
            <Overview />
          </section>
          <section id="about" className={styles["section-about"]}>
            <About scrollToSection={scrollToSection} />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
