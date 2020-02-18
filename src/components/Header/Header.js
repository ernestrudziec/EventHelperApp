import React from "react";
import styles from "./Header.module.scss";
import logoKum from "../../assets/logo/logo-kum.png";
import Clock from "../Clock/Clock";

const Header = () => {

    return(
        <>
        <img src= {logoKum} className={styles.logoKum} alt="Komisja Uczelni Mundurowych"/>
        <h1 className={styles.mainTitle}> XXXVII Zjazd KUM </h1>
        <h2 className={styles.secondaryTitle}> Wyższa Szkoła Policji w Szczytnie</h2>
            <Clock/>
        </>
    );
}

export default Header;