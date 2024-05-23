
import React from 'react';
import Project from './Project';
import styles from './Projects.module.css';

const projectsData = [
  { id: 1, title: 'Project One', description: 'Description for project one.', imageUrl: 'path/to/image1.jpg', projectUrl: 'http://example.com/1' },
  { id: 2, title: 'Project Two', description: 'Description for project two.', imageUrl: 'path/to/image2.jpg', projectUrl: 'http://example.com/2' },
  { id: 3, title: 'Project Three', description: 'Description for project three.', imageUrl: 'path/to/image3.jpg', projectUrl: 'http://example.com/3' }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.container}>
        <h2 className={styles['section-title']}>My Projects</h2>
        <div className={styles['projects-grid']}>
          {projectsData.map((project) => (
            <Project 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
