import React from "react";
import styles from './Event.module.scss';
import kumPlan from "../../data/eventPlan";
import './Event.module.scss';

const Event = ({children, expand, now, last, next, onClick, index, ...props}) =>{

    let eventClass;

    if(now && expand) eventClass = styles.expandedNowEvent;
    else if(now) eventClass = styles.now;

    if(last && expand) eventClass = styles.expandedLastEvent;
    else if(last) eventClass = styles.last;

    if(next && expand) eventClass = styles.expandedNextEvent;
    else if(next) eventClass = styles.next;






    return (

       <div className={eventClass} onClick={onClick}>

           <div className={styles.mainInfo}>
           <p className={styles.eventTime}>
               {kumPlan[index].startHour}:{kumPlan[index].startMinute === 0 ? "00" : kumPlan[index].startMinute}-{kumPlan[index].endHour}:{ (kumPlan[index].endMinute === 0) ? "00" : kumPlan[index].endMinute }
           </p>
           <p className={styles.eventName}>
               {kumPlan[index].event}
           </p>



           <i className={'fas fa-caret-square-down' + (expand ? ' rotated' : '')}></i>
           </div>

           <p className={styles.description}> {expand ? kumPlan[index].description : null} </p>
           <p className={styles.author}> {expand && kumPlan[index].author != "" ? "Prowadzący: " + kumPlan[index].author : null}</p>
           <p className={styles.place}> {expand ? "Miejsce: " + kumPlan[index].place : null}</p>
           <p className={styles.dressCode}> {expand ? "Dress code: " + kumPlan[index].dressCode : null}</p>
       </div>

    )


};

export default Event;