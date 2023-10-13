import React from "react";
import styles from "./css/DashBoardContent.module.css";
import SearchBar from "./SearchBar";

const DashBoardContent = () => {
    return (
        <div className={styles["dashboard-content-container"]}>
            <div className={styles["dashboard-content-header-container"]}>
                <div className={styles["dashboard-content-header-title"]}>
                    <h1>Hello Paras </h1>
                    <p>👋,</p>
                </div>
                <SearchBar backgroundColor='#FFF' />
            </div>
        </div>
    );
};

export default DashBoardContent;
