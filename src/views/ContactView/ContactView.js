import React from "react";
import {Link} from "react-router-dom";
import styles from './ContactView.module.scss';


const ContactView = () =>{


    return(
        <>
        <div className={styles.wrapper}>

            <h1>Jeśli masz jakieś pytania zapraszamy do kontaktu:</h1>
            <span><div className="fas fa-phone"></div> <p> tel. 785 260 880 - koordynator XXXVII Zjazdu</p></span>
            <p><b>Damian Gładek (<div className="fas fa-phone"></div> 510 486 718)</b> - Przewodniczący Zarządu Samorządu </p>
            <p><b>post. Łukasz Sikorski (<div className="fas fa-phone"></div> 697 132 979)</b> - I Zastępca Przewodniczącego  </p>
            <p><b>post. Renata Mróz (<div className="fas fa-phone"></div> 724 615 102)</b> - II Zastępca</p>
            <p><b>post. Dominik Szewczyk (<div className="fas fa-phone"></div> 792 971 936)</b> - Skarbnik</p>
            <p><b>post. Ernest Rudziec (<div className="fas fa-phone"></div> 785 260 880)</b> - Sekretarz</p>




        </div>





</>
    );
}

export default ContactView;