import React from "react";
import styles from './Event.module.scss';
import kumPlan from "../../data/eventPlan";
import './Event.module.scss';

const Event = ({children, expand, now, last, next, onClick, ...props}) =>{

    let eventClass;

    if(now && expand) eventClass = styles.expandedNowEvent;
    else if(now) eventClass = styles.now;

    if(last && expand) eventClass = styles.expandedLastEvent;
    else if(last) eventClass = styles.last;

    if(next && expand) eventClass = styles.expandedNextEvent;
    else if(next) eventClass = styles.next;


    let i = 2;

    return (

       <div className={eventClass} onClick={onClick}>

           <div className={styles.mainInfo}>
           <p className={styles.eventTime}>
               {kumPlan[i].startHour}:{kumPlan[i].startMinute == 0 ? "00" : kumPlan[i].startMinute} - {kumPlan[i].endHour}:{ (kumPlan[i].endMinute == 0) ? "00" : kumPlan[i].endMinute }
           </p>
           <p className={styles.eventName}>
               {kumPlan[i].event}
           </p>



           <i className="fas fa-caret-square-down"></i>
           </div>

           <p className={styles.description}> {expand ? kumPlan[i].description : null} </p>
           <p className={styles.author}> {expand ? "Prowadzący: " + kumPlan[i].author : null}</p>
           <p className={styles.place}> {expand ? "Miejsce: " + kumPlan[i].place : null}</p>
           <p className={styles.dressCode}> {expand ? "Dress code: " + kumPlan[i].dressCode : null}</p>
       </div>

    )


};

export default Event;