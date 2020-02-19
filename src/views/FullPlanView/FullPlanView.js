import React from "react";
import {Link} from "react-router-dom";
import styles from './FullPlanView.module.scss';
import kumPlan from "../../data/eventPlan";
import Event from "../../components/Event/Event";

const FullPlanView = () => {


    return(

        <>

            <div className={styles.wrapper}>



            {kumPlan.map((object, i) => {


                return (
                    <>
                        <Event next index={i}></Event>
                    </>
                );

            }

            )}



        </div>




</>
    );
}

export default FullPlanView;