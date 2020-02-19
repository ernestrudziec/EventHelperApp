import React from "react";
import {Link} from "react-router-dom";
import styles from './ContactView.module.scss';


const ContactView = () =>{


    return(
        <>
        <div className={styles.wrapper}>

            <h1>Jeśli masz jakieś pytania zapraszamy do kontaktu:</h1>
            <span><div className="fas fa-phone"></div> <p> tel. 785 260 880 - koordynator XXXVII Zjazdu</p></span>
            <p><b>Damian Gładek</b> - Przewodniczący Zarządu Samorządu</p>
            <p><b>post. Łukasz Sikorski</b> - I Zastępca Przewodniczącego</p>
            <p><b>post. Renata Mróz</b> - II Zastępca</p>
            <p><b>post. Dominik Szewczyk</b> - Skarbnik</p>
            <p><b>post. Ernest Rudziec</b> - Sekretarz</p>




        </div>





</>
    );
}

export default ContactView;