import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bar from "./pages/bar";
import Caishots from "./pages/caishots";
import Consultoria from "./pages/consultoria";
import Home from "./pages/home";

function Routes({ theme, setLocation }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home theme={theme} setLocation={setLocation} />
        </Route>
        <Route path="/bar">
          <Bar theme={theme} setLocation={setLocation} />
        </Route>
        <Route path="/Caishots" component={Caishots} />
        <Route path="/Consultoria">
          <Consultoria theme={theme} setLocation={setLocation} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
