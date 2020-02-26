import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "./index"
import { Professional } from "./components/professional";

export default function Routes() {
  return (
    <Switch>
      <Route path="" exact component={Main} />
      <Route path="/" exact component={Main} />
      <Route path="/professional" exact component={Professional} />
    </Switch>
  );
}