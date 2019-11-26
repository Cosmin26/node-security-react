import React from "react";
import { Route } from "react-router-dom";

const RouteWrapper = route => {
  return (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      render={props => {
        return route.layout ? (
          <route.layout {...props} title={route.title}>
            <route.component {...props} />
          </route.layout>
        ) : (
          <route.component {...props} routes={route.routes} />
        );
      }}
    />
  );
};

export default RouteWrapper;
