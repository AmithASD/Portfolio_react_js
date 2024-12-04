import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/*<a href={demo} className={styles.link}>*/}
        {/*  Demo*/}
        {/*</a>*/}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};


// {
//   "title": "Gym Site",
//   "imageSrc": "projects/Gym1.jpg",
//   "description": "The website lets users book appointments and access information about exercises, providing tools for scheduling and fitness education and details about trainers and hiring a trainer can also be done through this",
//   "skills": ["HTML", "JavaScript", "CSS"],
//   "demo": "https://www.example.com",
//   "source": "https://github.com/AmithASD/Gym"
// }
