import React from "react";
import styles from './Event.module.scss';
import kumPlan from "../../data/eventPlan";


const Event = ({children,  now, last, next, ...props}) =>{

    let eventClass = styles.now;

    if(last) eventClass = styles.last;
    else if(next) eventClass = styles.next;

    return (

       <div className={eventClass}>

           <p className={styles.eventTime}>
               {kumPlan[1].startHour}:{kumPlan[1].startMinute}
           </p>
           <p className={styles.eventName}>
               {kumPlan[1].event}
           </p>
           <i className="fas fa-caret-square-down"></i>
       </div>

    )


};

export default Event;