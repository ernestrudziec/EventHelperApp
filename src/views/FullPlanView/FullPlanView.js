import React from "react";
import {Link} from "react-router-dom";
import styles from './FullPlanView.module.scss';
import kumPlan from "../../data/eventPlan";
import Event from "../../components/Event/Event";

const FullPlanView = () =>{


    return(
        <>
            <Link to ="/" className={styles.linkHome}>Ekran startowy</Link>
        <div className={styles.wrapper}>



            {kumPlan.map((object, i) => {


                return (
                    <>
                        <Event last index={i}></Event>
                    </>
                );

            }
            )}



        </div>




</>
    );
}

export default FullPlanView;