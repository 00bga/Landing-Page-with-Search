import React from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className={styles["app"]}>
      <Navigation />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
