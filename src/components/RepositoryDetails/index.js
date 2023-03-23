import React from "react";
import styles from "./RepositoryDetails.module.css";
import { useHistory } from "react-router-dom";

function RepositoryDetails(props) {
  const renderRepository = (repository) => {
    if (!repository) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles["repository-details-bg"]}>
        <div className={styles["repository-header"]}>
          <h2>Repository Details</h2>
        </div>
        <div className={styles["repository-card-wrapper"]}>
          <div className={styles["repository-card"]}>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <div className={styles["repository-details"]}>
              <p>
                <span className={styles["repository-attribute"]}>Owner:</span>{" "}
                {repository.owner.login}
              </p>
              <p>
                <span className={styles["repository-attribute"]}>Stars:</span>{" "}
                {repository.stargazers_count}
              </p>
              <p>
                <span className={styles["repository-attribute"]}>Forks:</span>{" "}
                {repository.forks_count}
              </p>
              <p>
                <span className={styles["repository-attribute"]}>
                  Language:
                </span>{" "}
                {repository.language}
              </p>
              <p>
                <span className={styles["repository-attribute"]}>Created:</span>{" "}
                {repository.created_at}
              </p>
              <p>
                <span className={styles["repository-attribute"]}>
                  Last Updated:
                </span>{" "}
                {repository.updated_at}
              </p>
            </div>
            <div className={styles["links"]}>
              <a href={repository.html_url} target="_blank">
                Go to Repository
              </a>
              <a href="/" className={styles["go-back"]}>
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles["repository-details"]}>
      {renderRepository(props.repository)}
    </div>
  );
}

export default RepositoryDetails;
