// src/components/Project.jsx
import React from 'react';
import styles from './Project.module.css';

const Project = ({ title, description ,link}) => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
      <h2 className={styles.projectTitle}>{title}</h2>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.projectlink}><a href={link}> link </a></p>

    </div>
    </div>
  );
};

export default Project;
