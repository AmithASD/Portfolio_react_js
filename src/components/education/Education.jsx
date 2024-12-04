import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Education</h2>
            <div>
                <ul>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemTextDesc}>
                            <h1 style={{ fontSize: '30px' }}>
                                BSc Mathematics & Computer Science
                            </h1>
                            <p>Eastern University</p>
                            <br></br>
                            <ul>
                                <li>
                                    <p>
                                        Followed Financial Mathematics, Probability, Statistics and report
                                        writing
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Followed DBMS, User Interface, Mobile Computing, Network Model
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div style={{marginTop:'10px'}}>
                <ul>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemTextDesc}>
                            <h1 style={{ fontSize: '30px' }}>
                                GCE Advanced Level
                            </h1>
                            <br></br>
                            <ul>
                                <li>
                                    <p>
                                        Mathematics Stream
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
