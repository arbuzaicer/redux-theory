import React from "react";
import { routes } from "./routes";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </Layout>
    </>
  );
};

export default App;
