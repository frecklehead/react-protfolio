// src/components/Project.jsx
import React from 'react';
import styles from './Project.module.css';

const Project = ({ title, description ,link,Source}) => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.projectlink}><a href={link}> link </a></p>
      <p className={styles.projectSource}> <a href={Source}> Source:</a></p>

    </div>
    </div>
  );
};

export default Project;
