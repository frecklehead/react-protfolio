
import styles from "./Navbar.module.css";
import React, { useState } from 'react';

import { getImageUrl } from '../../utilis';
export const Navbar=()=>{

  const [menuOpen ,setMenuOpen]= useState(false);
     return <nav className={styles.navbar}>
    <a href="#"  className={styles.title}>Portfolio</a>
    <div className={styles.menu}>
      <img
      className={styles.menuBtn} 
       src={menuOpen
       ?getImageUrl("nav/menuIcon.png")
      :getImageUrl("nav/2024-03-12_20-00.png")}
      onClick={()=>setMenuOpen(!menuOpen)} alt="menu-button"/>
      <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen }`} 
      onClick={()=> setMenuOpen(false)}>
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