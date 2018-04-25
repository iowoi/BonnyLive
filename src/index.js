

import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./component/Home";
import "./main.css";

const App = () => <Router>
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
</Router>

render(
    <App/>, document.getElementById("root"));
