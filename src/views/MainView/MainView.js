import React from "react";
import './MainView.module.scss';
import styles from './MainView.module.scss';
import logo from '../../assets/images/logo.svg';
import Event from "../../components/Event/Event";
import kumPlan from "../../data/eventPlan";
import {BrowserRouter, Switch} from "react-router-dom";
import logoKum from '../../assets/logo/logo-kum.png';

const MainView = () => (


<div className={styles.wrapper}>
    <img src={logoKum} className={styles.logoKum} alt="Komisja Uczelni Mundurowych"/>
    <h1 className={styles.mainTitle}>XXXVII Zjazd kum</h1>
    <h2 className={styles.secondaryTitle}>Wyższa Szkoła Policji w Szczytnie</h2>


    <p className={styles.eventLabel}>Ostatnie wydarzenie</p>
    <Event last>  </Event>
    <p className={styles.eventLabel}> Teraz</p>
    <Event now> Wydarzenie teraz </Event>
    <p className={styles.eventLabel}>Następne wydarzenie</p>
    <Event next>  Następne wydarzenie </Event>


</div>



);

export default MainView;
