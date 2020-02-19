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


        return(

            <div className={styles.wrapper}>

                <p className={styles.eventLabel}>Następne</p>
                <Event expand = {this.state.isNextExpanded} next onClick = {this.expandNext} index={0}>  Następne wydarzenie </Event>

                <p className={styles.eventLabel}>Teraz</p>
                <Event expand = {this.state.isNowExpanded} now onClick = {this.expandNow} index={1}> Wydarzenie teraz </Event>

                <p className={styles.eventLabel}>Ostatnie</p>
                <Event expand = {this.state.isLastExpanded} last onClick = {this.expandLast} index={2}> </Event>




            </div>
        );
    }





}

export default MainView;
