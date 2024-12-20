import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>Bogaha Ella, 05th Mile Post, Veheragoda, Badalkumbura</p>
        <p>076 015 87 15</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:amithsandaruwan98@gmail.com">amithsandaruwan98@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="http://www.linkedin.com/in/amitha-sandaruwan-407834268">linkedin.com/in/amitha-sandaruwan-407834268</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/AmithASD">github.com/AmithASD</a>
        </li>
      </ul>
    </footer>
  );
};
