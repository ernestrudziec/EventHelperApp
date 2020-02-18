import React from "react";
import styles from "./Header.module.scss";
import logoKum from "../../assets/logo/logo-kum.png";
import logoSUWSPol from '../../assets/logo/logo-su-wspol.jpg';
import logoWSPol from '../../assets/logo/logo-wspol.png';

import Clock from "../Clock/Clock";

const Header = () => {

    return(
        <>
            <div className={styles.logoWrapper}>

            <img src= {logoSUWSPol} className={styles.logoSUWSPol} alt="Komisja Uczelni Mundurowych"/>
                <img src= {logoKum} className={styles.logoKum} alt="Komisja Uczelni Mundurowych"/>
                <img src= {logoWSPol} className={styles.logoWSPol} alt="Komisja Uczelni Mundurowych"/>
            </div>
        <h1 className={styles.mainTitle}> XXXVII Zjazd KUM </h1>
        <h2 className={styles.secondaryTitle}> Wyższa Szkoła Policji w Szczytnie</h2>
            <Clock/>
        </>
    );
}

export default Header;