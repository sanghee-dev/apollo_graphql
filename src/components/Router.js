import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const Router = () => (
  <HashRouter>
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </>
  </HashRouter>
);
export default Router;
