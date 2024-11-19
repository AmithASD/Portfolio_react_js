import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className="name-hilight" style={{color:'red'}}>Amitha Sandaruwan</span></h1>
        <p className={styles.description}>
          I'm a Full-Stack developer with 1+ years of experience in React JS and
          Node JS. Reach out if you'd like to learn more !
        </p>
        <a href="mailto:amithsandaruwan98@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{borderRadius:'50%', width:'350px', height:'370px'}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
