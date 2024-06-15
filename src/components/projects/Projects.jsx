// src/components/Projects.jsx
import React from 'react';
import Project from './Project';
import styles from './Projects.module.css'; // Assuming you still want to use some container styles

const projectsData = [
  { title: 'Digit-Recognizer', description:"This Django project provides a simple web application that allows users to draw digits on a canvas and receive a prediction of the digit. The prediction is powered by a machine learning model trained on the MNIST dataset."
,link:"hhttps://x.com/aryal_prashamsa/status/1801974728418050056" 
,Source:"https://github.com/frecklehead/Digit-Predictor-MNIST-"},

  { title: 'Hamro Dokaan', description:"An django based web application for small business owner to have their own platform of e-commerce with direct customer communication via direct messaging."
,link:"https://youtu.be/VtPlaFJdzNE" 
,Source:"https://github.com/frecklehead/Online-Marketplace"},
  { title: 'Ecllipses', description: 'An threejs based web app with visually appealing animations of ecllipes especially designed for kids where they can know anyhting about ecllipses where I contribured the Frontend Part creating a flipbook animation.' ,link:"https://github.com/frecklehead/SpaceApps",Source:""},
  { title: 'MedicalBillEstimater', description: 'Using Linear regression model with ML model helps us to predict the medical charges of an individual based on his past history.',
 }
];

const Projects = () => {
  return (
     
 

      <div id="Pro" className={styles.container}>
          <h1> Projects </h1>
      {projectsData.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} 
        link={project.link} Source={project.Source}/>
      ))}
    </div>
    
  );
};

export default Projects;
