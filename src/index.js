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

const styles = {
  width: "320px"
};

const App = () => (
  <div>
    <Router style={styles}>
      <Switch>
        <Route path="/" component={ActivitySignUp} />
      </Switch>
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
