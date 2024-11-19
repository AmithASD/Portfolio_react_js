import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/black.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
           style={{width: '250px', height:'250px', borderRadius:'30px' , marginRight:"40px"}}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemTextDesc}>
              <p>
                I am a passionate and dedicated individual who is deeply enthusiastic about front-end & Back - end 
                technologies. With a relentless work ethic and a penchant for continuous learning, 
                I thrive in the dynamic world of web development.
              </p>
              <br></br>
              <p>My journey is defined by a commitment to staying at the forefront of emerging trends, 
                ensuring that my skills are always aligned with the latest advancements in the field.
                I am a collaborative team player with the ability to work independently. As a systematic 
                and logical thinker, I specialize in compartmentalizing program aspects and building integrative systems. 
                My dedication to order, creativity, and efficiency positions me as a valuable asset in navigating software 
                development complexities
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.downloadSection}>
    <a href="../../../assets/about/DMA SANDARUWAN_CV .pdf" download="DMA SANDARUWAN_CV.pdf.pdf" className={styles.downloadButton}>
      Download CV
    </a>
  </div>
    </section>
  );
};
