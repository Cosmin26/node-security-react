import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { uid } from "react-uid";
import { routesList, routes } from "../routes/routes";
import RouteWrapper from "./RouteWrapper";
import client from "../services/apollo";

const Bootstrap = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        {window.location.pathname === "/" && (
          <Redirect to={routes.login.path} push />
        )}
        {routesList.map((route, index) => (
          <RouteWrapper key={`${uid(route, index)}`} {...route} />
        ))}
      </Switch>
    </Router>
  </ApolloProvider>
);

export default Bootstrap;
