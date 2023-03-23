import React from "react";
import styles from "./RepositoryPreview.module.css";
import { Link } from "react-router-dom";

function RepositoryPreview(props) {
  return (
    <div className={styles["search-results-preview"]}>
      {props.searchResults.map((result) => (
        <Link to={`/repository/${result.id}`} className={styles["link"]}>
          <div
            key={result.id}
            onClick={() => props.setSelectedRepository(result)}
            className={styles["result-preview"]}
          >
            <h4>{result.name}</h4>
            <p>{result.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RepositoryPreview;
