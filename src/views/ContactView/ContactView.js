import React from "react";
import {Link} from "react-router-dom";
import styles from './ContactView.module.scss';


const ContactView = () =>{


    return(
        <>
        <div className={styles.wrapper}>

            <h1>Jeśli masz jakieś pytania zapraszamy do kontaktu:</h1>
            <span><div className="fas fa-phone"></div> <p> tel. 785 212 122 - koordynator XXXVII Zjazdu</p></span>
            {/*<p><b>Jerzy Popek(<div className="fas fa-phone"></div> 510 486 718)</b> - Przewodniczący Zarządu Samorządu </p>*/}
            {/*<p><b>post. Łukasz Sikorski (<div className="fas fa-phone"></div> 697 132 979)</b> - I Zastępca Przewodniczącego  </p>*/}
            {/*<p><b>post. Jan Kowalski (<div className="fas fa-phone"></div> 724 615 102)</b> - II Zastępca</p>*/}
            {/*<p><b>post. Robert Nowakowski (<div className="fas fa-phone"></div> 792 971 936)</b> - Skarbnik</p>*/}
            {/*<p><b>post. Józef Bober (<div className="fas fa-phone"></div> 785 260 880)</b> - Sekretarz</p>*/}

            <p><b>Jerzy Popek(<div className="fas fa-phone"></div> 510 231 333)</b> - Przewodniczący Zarządu Samorządu </p>
            <p><b>post. Łukasz Sikorski (<div className="fas fa-phone"></div> 697 333 333)</b> - I Zastępca Przewodniczącego  </p>
            <p><b>post. Jan Kowalski (<div className="fas fa-phone"></div> 724 432 231)</b> - II Zastępca</p>
            <p><b>post. Robert Nowakowski (<div className="fas fa-phone"></div> 723 535 936)</b> - Skarbnik</p>
            <p><b>post. Józef Bober (<div className="fas fa-phone"></div> 735 220 853)</b> - Sekretarz</p>


        </div>





</>
    );
}

export default ContactView;