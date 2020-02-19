import React from "react";
import {Link} from "react-router-dom";
import styles from './MapView.module.scss';


const MapView = () => {


    return(
        <>

             <a className={styles.linkToMap} href="http://www.e-wspol.edu.pl/ws/">Kliknij tu aby przejść do wirtualnego widoku 3D uczelni.</a>
            <img className={styles.image} src="http://www.e-wspol.edu.pl/ws/indexdata/floorplan/zwymiarowana_mapa_plan.png"/>

            </>
    );
}

export default MapView;