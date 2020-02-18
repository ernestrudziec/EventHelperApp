import React from 'react';

import MainView from "../MainView/MainView";
import AboutMeView from "../AboutMeView/AboutMeView";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import logoKum from "../../assets/logo/logo-kum.png";


class Root extends React.Component {

    render() {

        return (



            <BrowserRouter>


                <Switch>

                    <Route exact path="/" component={MainView}/>
                    <Route path="/about" component={AboutMeView}/>

                </Switch>

            </BrowserRouter>
        );

    }

}

export default Root;