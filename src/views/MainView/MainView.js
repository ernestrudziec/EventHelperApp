import React from "react";
import './MainView.module.scss';
import styles from './MainView.module.scss';
import logo from '../../assets/images/logo.svg';
import Event from "../../components/Event/Event";
import kumPlan from "../../data/eventPlan";
import {BrowserRouter, Switch} from "react-router-dom";
import logoKum from '../../assets/logo/logo-kum.png';

class MainView extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
    isLastExpanded: false,
        isNowExpanded: false,
        isNextExpanded: false,
        nowIndex: 1,
    }



    showWhatIsNow = () => {

     let indexOfEvent = 1;
     let currentTime = new Date();

     const minute = 15;
     const hour = 15;

     let eventTime = new Date();


     kumPlan.map((object, i) => {

         console.log("time: " + hour + ":" + (minute < 10 ? "0" + minute : minute));

         eventTime.setMinutes(kumPlan[i].startMinute);
         eventTime.setHours(kumPlan[i].startHour);

         console.log(i + " - (" + eventTime.getHours() + ":" + (eventTime.getMinutes() === 0 ? eventTime.getMinutes() + "0" : eventTime.getMinutes() ) + ")")

         if (eventTime <= currentTime)
         { indexOfEvent = i }})


     console.log(" ");
     console.log(" ");
     console.log("eventNow: " + indexOfEvent);
     console.log("eventNext: " + (indexOfEvent+1));
     console.log("eventLast: " + (indexOfEvent-1));

        return indexOfEvent;

}

    expandLast = () => {

            this.setState({
                isLastExpanded: !this.state.isLastExpanded,
            })

}

    expandNow = () => {

        this.setState({
            isNowExpanded: !this.state.isNowExpanded,
        })

    }

    expandNext = () => {

        this.setState({
            isNextExpanded: !this.state.isNextExpanded,
        })

    }



    render(){

    let currentEvent = this.showWhatIsNow();
    console.log(currentEvent);


        return(

            <div className={styles.wrapper}>

                <p className={styles.eventLabel}>Następne</p>
                <Event expand = {this.state.isNextExpanded} next onClick = {this.expandNext} index={currentEvent < kumPlan.length-1 ? (currentEvent+1) : currentEvent }>  Następne wydarzenie </Event>

                <p className={styles.eventLabel}>Teraz</p>
                <Event expand = {this.state.isNowExpanded} now onClick = {this.expandNow} index={ currentEvent }> Wydarzenie teraz </Event>

                <p className={styles.eventLabel}>Ostatnie</p>
                <Event expand = {this.state.isLastExpanded} last onClick = {this.expandLast} index={ currentEvent !== 0 ? (currentEvent-1) : currentEvent }> </Event>




            </div>
        );
    }





}

export default MainView;
