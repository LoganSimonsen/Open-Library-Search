import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Subjects from "./components/Subjects";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Subjects" component={Subjects} />

    <Route
      path="*"
      render={() => (
        <div>
          <p>Not Found</p>
        </div>
      )}
    />
  </Switch>
);
