import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./profile.module.css" 
export const Profile=()=>{
  return <section  id ="about" className={styles.container}>
    <div className={styles.content}> 
      <h1 className={styles.title}>Hi! I'm Prashamsa Aryal.</h1>
      <div className="about">
      <p className={styles.description}>
        
        <br />
                I am learner with  strong foundation in Python and JavaScript, along with experience in frameworks and libraries like NumPy, pandas, scikit-learn, Django, and React learning to tackle complex challenges in the field of artificial intelligence and software development.
                </p>
      </div>
        <a href="mailto:prashamsa35np@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
    
        <img className={styles.profileimg}src={getImageUrl("profile/IMG_2513.png")} />
        <div className={styles.topblur}></div>
        <div className={styles.bottomblur}></div>


      
   
  </section>
}