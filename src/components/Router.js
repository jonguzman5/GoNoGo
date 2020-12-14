import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import LosAngeles from "./LosAngeles";
import Chicago from "./Chicago";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/losangeles" component={LosAngeles}/>
            <Route exact path="/chicago" component={Chicago}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
