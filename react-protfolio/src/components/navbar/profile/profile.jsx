import React from "react";
import { getImageUrl } from "../../../utilis";
import styles from "./profile.module.css" 
export const Profile=()=>{
  return <section className={styles.container}>
    <div className={styles.content}> 
      <h1 className={styles.title}>Hi! I'm Prashamsa Aryal.</h1><p className={styles.description}>I am a 2nd year Electronics and Communication Engineering Student currently studying in Pulchowk Campus.
        
<br />
        With a strong foundation in Python and JavaScript, along with experience in frameworks and libraries like NumPy, pandas, scikit-learn, Django, and React, I'm learning to tackle complex challenges in the field of artificial intelligence and software development.
        </p>
        <a href="mailto:prashamsa35np@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
    
        <img src={getImageUrl("profile/IMG_2513.png")} />
        <div className={styles.topblur}></div>
        <div className={styles.bottomblur}></div>


      
   
  </section>
}