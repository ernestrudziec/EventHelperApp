import React from "react";
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return(

        <div className={styles.wrapper}>


            <ul className={styles.list}>
                <li><NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/kontakt">
                    Kontakt
                    <div className="fas fa-phone-square-alt"></div>
                </NavLink>
                </li>
                <li><NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/planzjazdu">
                    Plan zjazdu
                    <div className="fas fa-calendar-check"></div>
                </NavLink>
                </li>
                <li><NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/mapawspol">Mapa WSPol
                    <div className="fas fa-map-pin"></div>
                </NavLink>
                </li>
            </ul>

        </div>

    );
}

export default Nav;