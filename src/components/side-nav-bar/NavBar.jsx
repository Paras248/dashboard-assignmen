import React from "react";
import NavItem from "./NavItem";
import styles from "./css/NavBar.module.css";
import Profile from "./Profile";

import nutImg from "../../assets/nut.svg";
import profileImg from "../../assets/profile.svg";
import searchImg from "../../assets/search-square.svg";
import cubeImg from "../../assets/cube.svg";
import percentImg from "../../assets/percent.svg";
import helpImg from "../../assets/help.svg";
import moneybagImg from "../../assets/moneybag.svg";

const NavBar = () => {
    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["nav-heading-container"]}>
                <img src={nutImg} />
                <p>Dashboard</p>
            </div>
            <div className={styles["navbar-links"]}>
                <NavItem imagePath={searchImg} title='Dashboard' />
                <NavItem imagePath={cubeImg} title='Product' />
                <NavItem imagePath={profileImg} title='Customers' />
                <NavItem imagePath={moneybagImg} title='Income' />
                <NavItem imagePath={percentImg} title='Promote' />
                <NavItem imagePath={helpImg} title='Help' />
            </div>
            <Profile />
        </div>
    );
};

export default NavBar;
