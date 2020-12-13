import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import LastWeek from "./LastWeek";
import NextWeek from "./NextWeek";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/lastweek" component={LastWeek}/>
            <Route exact path="/nextweek" component={NextWeek}/>
            <Route exact component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
