import React from "react";
import styles from './Nav.module.scss';

const Nav = () => {

    return(

        <div className={styles.wrapper}>


            <ul className={styles.list}>
                <li>Kontakt
                    <div className="fas fa-phone-square-alt"></div>
                </li>
                <li>Plan zjazdu
                    <div className="fas fa-calendar-check"></div>
                </li>
                <li>Mapa WSPol
                    <div className="fas fa-map-pin"></div>
                </li>
            </ul>

        </div>

    );
}

export default Nav;