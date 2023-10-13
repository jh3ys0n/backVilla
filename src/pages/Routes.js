import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Home from "./Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path="/contacto" component={Contacto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;