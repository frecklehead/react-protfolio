import react from 'react';
import styles from "./Navbar.module.css";
export const Navbar=()=>{
  return <nav className={styles.navbar}>
    <a href="#"  className={styles.title}>Portfolio</a>
    <div className={styles.menu}>
      <ul className={styles.menuitems}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exper">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  
}