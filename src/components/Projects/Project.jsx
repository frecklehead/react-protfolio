
import React from 'react';
import styles from './Projects.module.css';


const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className={styles['project-card']}>
      <img src={imageUrl} alt={title} className={styles['project-image']} />
      <div className={styles['project-info']}>
        <h3 className={styles['project-title']}>{title}</h3>
        <p className={styles['project-description']}>{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['project-link']}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;

// const Project = ({ title, description }) => {
//   return (
//     <div className={styles.project}>
//       <h2 className={styles.projectTitle}>{title}</h2>
//       <p className={styles.projectDescription}>{description}</p>
//     </div>
//   );
// };

// export default Project;
