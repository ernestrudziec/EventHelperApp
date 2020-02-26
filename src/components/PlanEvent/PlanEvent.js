import React from "react";
import styles from './PlanEvent.module.scss';
import kumPlan from "../../data/eventPlan";

const PlanEvent = ({index}) => {

    let day = kumPlan[index].startDay;

    let startHour = (kumPlan[index].startHour === 0 ? kumPlan[index].startHour + "0" : kumPlan[index].startHour);
    let startMinute = (kumPlan[index].startMinute < 10 ? "0" +  kumPlan[index].startMinute : kumPlan[index].startMinute);
    let endHour = (kumPlan[index].endHour === 0 ? kumPlan[index].endHour + "0" : kumPlan[index].endHour);
    let endMinute = (kumPlan[index].endMinute < 10 ? "0" +  kumPlan[index].endMinute : kumPlan[index].endMinute);


    let place = kumPlan[index].place;
    let event = kumPlan[index].event;
    let description = kumPlan[index].description;
    let dressCode = kumPlan[index].dressCode;

    return(

        <div className={styles.eventWrapper}>

            <div className={styles.dateAndTimeWrapper}>
                <div className={styles.date}> {day}/03/2020r. </div>
                <div className={styles.time}> {startHour}:{startMinute} - {endHour}:{endMinute}</div>
            </div>

            <div className={styles.eventNameAndPlaceWrapper}>
                <div className={styles.event}>{event}</div>
                <div className={styles.place}>{place}</div>
            </div>

        </div>
    );

}


export default PlanEvent;