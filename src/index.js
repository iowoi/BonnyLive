import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  IndexRoute,
  Switch
} from "react-router-dom";
import ActivitySignUp from "./component/ActivitySignUp";
import "./main.css";

const styles = {
  width: "320px"
};

const App = () => (
  <div>
    <div style={styles}>
      <Router>
        <Switch>
          <Route path="/" component={ActivitySignUp} />
        </Switch>
      </Router>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
