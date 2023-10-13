import React from "react";
import styles from "./css/Profile.module.css";

const Profile = () => {
    return (
        <div className={styles["profile-container"]}>
            <div className={styles["profile-pic"]}></div>
            <div>
                <h1>Evano</h1>
                <p>Project Manager</p>
            </div>
            <div></div>
        </div>
    );
};

export default Profile;
