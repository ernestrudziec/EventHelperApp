import React from 'react';
import MainView from "../MainView/MainView";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './Root.module.scss';
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import ContactView from "../ContactView/ContactView";
import FullPlanView from "../FullPlanView/FullPlanView";
import MapView from "../MapView/MapView";


class Root extends React.Component {

    render() {

        return (



            <BrowserRouter>

                <Nav/>
                <div className={styles.wrapper}>
                <Header/>


                <Switch>

                    <Route exact path="/" component={MainView}/>
                    <Route path="/kontakt" component={ContactView}/>
                    <Route path="/planzjazdu" component={FullPlanView}/>
                    <Route path="/mapawspol" component={MapView}/>

                </Switch>
                </div>

            <p className={styles.copyrights}> Copyrights &copy; Ernest Rudziec 2020 </p>
            </BrowserRouter>

        );

    }

}

export default Root;