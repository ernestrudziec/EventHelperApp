import React from "react";
import {Link} from "react-router-dom";
import styles from './FullPlanView.module.scss';
import kumPlan from "../../data/eventPlan";
import Event from "../../components/Event/Event";
import PlanEvent from "../../components/PlanEvent/PlanEvent";

const FullPlanView = () => {


    return(

        <>

            <div className={styles.wrapper}>

                <div className={styles.date}> 26.03.2020r (czwartek) </div>

            {kumPlan.map((object, i) => {

                if(kumPlan[i].startDay === 26) {
                    return (
                        <>
                            <PlanEvent index={i}></PlanEvent>

                        </>
                    );
                }

            }

            )}

                <div className={styles.date}> 27.03.2020r (piątek) </div>

                {kumPlan.map((object, i) => {

                        if(kumPlan[i].startDay === 27) {
                            return (
                                <>
                                    <PlanEvent index={i}></PlanEvent>

                                </>
                            );
                        }

                    }

                )}


                <div className={styles.date}> 28.03.2020r (sobota) </div>

                {kumPlan.map((object, i) => {

                        if(kumPlan[i].startDay === 28) {
                            return (
                                <>
                                    <PlanEvent index={i}></PlanEvent>

                                </>
                            );
                        }

                    }

                )}

                <div className={styles.date}> 29.03.2020r (niedziela) </div>

                {kumPlan.map((object, i) => {

                        if(kumPlan[i].startDay === 29) {
                            return (
                                <>
                                    <PlanEvent index={i}></PlanEvent>

                                </>
                            );
                        }

                    }

                )}




            </div>




</>
    );
}

export default FullPlanView;