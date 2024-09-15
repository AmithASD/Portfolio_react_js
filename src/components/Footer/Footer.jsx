import React from "react";

import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div >
               <hr/>
                <p className={styles.description}>@2024 | All rights reserved By Amith SD. </p>
            </div>
        </footer>
    );
};

