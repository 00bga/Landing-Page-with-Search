import React from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles["app"]}>
      <div className={styles["nav"]}>
        <Navigation scrollToSection={scrollToSection} />
      </div>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="overview">
          <Overview />
        </section>
        <section id="about" className={styles["section-about"]}>
          <About scrollToSection={scrollToSection} />
        </section>
      </main>
    </div>
  );
}

export default App;
