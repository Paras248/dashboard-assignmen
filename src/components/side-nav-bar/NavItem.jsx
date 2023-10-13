import React from "react";
import styles from "./css/NavItem.module.css";

const NavItem = ({ imagePath, title }) => {
    return (
        <div className={styles["nav-item-container"]}>
            <img src={imagePath} />
            <p>{title}</p>
        </div>
    );
};

export default NavItem;
