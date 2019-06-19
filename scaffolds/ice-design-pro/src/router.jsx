/**
 * 定义应用路由
 */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import path from 'path';
import routes from './routerConfig';

const router = () => {
  return (
    <Router basename="/">
      <Switch>
        {routes.map((route, id) => {
          const { component, layout, children, ...others } = route;

          if (!children) {
            // eslint-disable-next-line
            const RouteLayout = layout && require(`./${layout}`).default;
            // eslint-disable-next-line
            const RouteComponent = require(`./${component}`).default;

            return (
              <Route
                key={id}
                {...others}
                component={(props) => {
                  return (
                    <RouteLayout key={id}>
                      <RouteComponent {...props} />
                    </RouteLayout>
                  );
                }}
              />
            );
            // eslint-disable-next-line
          } else {
            // eslint-disable-next-line
            const RouteLayout = component && require(`./${component}`).default;
            return (
              <RouteLayout key={id}>
                <Switch>
                  {route.children.map((routeChild, idx) => {
                    routeChild.path = path.join(route.path, routeChild.path);
                    // eslint-disable-next-line
                    const RouteComponent = require(`./${routeChild.component}`).default;
                    console.log(routeChild)
                    return (
                      <Route
                        key={`${id}-${idx}`}
                        {...routeChild}
                        component={RouteComponent}
                      />
                    );
                  })}
                </Switch>
              </RouteLayout>
            );
          }
        })}
      </Switch>
    </Router>
  );
};

export default router;
