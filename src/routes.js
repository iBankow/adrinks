import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bar from "./pages/bar";
import Caishots from "./pages/caishots";
import Consultoria from "./pages/consultoria";
import Home from "./pages/home";

function Routes({ theme }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home theme={theme} />
        </Route>
        <Route path="/bar" component={Bar} theme={theme} />
        <Route path="/Caishots" component={Caishots} />
        <Route path="/Consultoria" component={Consultoria} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
