import React from "react";
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return(

        <div className={styles.wrapper}>


            <div className={styles.list}>
              <NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/kontakt">
                    Kontakt
                    <div className="fas fa-phone-square-alt"></div>
                </NavLink>

              <NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/planzjazdu">
                    Plan zjazdu
                    <div className="fas fa-calendar-check"></div>
                </NavLink>

               <NavLink exact activeClassName={styles.navItemLinkActive}
                             className={styles.navItemLink} to = "/mapawspol">Mapa WSPol
                    <div className="fas fa-map-pin"></div>
                </NavLink>

            </div>

        </div>

    );
}

export default Nav;