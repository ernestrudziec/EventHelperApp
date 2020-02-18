import React from 'react';

import MainView from "../MainView/MainView";
import AboutMeView from "../AboutMeView/AboutMeView";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './Root.module.scss';
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";


class Root extends React.Component {

    render() {

        return (



            <BrowserRouter>

                <div className={styles.wrapper}>
                <Header/>
                <Nav/>

                <Switch>

                    <Route exact path="/" component={MainView}/>
                    <Route path="/about" component={AboutMeView}/>

                </Switch>
                </div>


            </BrowserRouter>

        );

    }

}

export default Root;