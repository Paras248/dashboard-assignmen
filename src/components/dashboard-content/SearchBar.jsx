import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/SearchBar.module.css";

const SearchBar = ({ backgroundColor }) => {
    return (
        <div style={{ backgroundColor }} className={styles["search-bar-container"]}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["font-awesome-image"]} />
            <input placeholder='Search' />
        </div>
    );
};

export default SearchBar;
