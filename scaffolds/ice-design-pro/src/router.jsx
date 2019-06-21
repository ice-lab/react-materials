/**
 * 定义应用路由
 */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import path from 'path';
import routes from './routerConfig';

const router = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const { component, children, ...others } = route;
          const RouteComponent = component;
          return (
            <Route
              key={id}
              {...others}
              component={(props) => {
                return (
                  <RouteComponent key={id} {...props}>
                    {children && (
                      <Switch>
                        {children.map((routeChild, idx) => {
                          const { redirect, path: childPath, component: childComponent } = routeChild;
                          if (redirect) {
                            return (
                              <Redirect
                                key={`${id}-${idx}`}
                                exact
                                from={path.join(route.path, childPath)}
                                to={redirect}
                              />
                            );
                          } else {
                            return (
                              <Route
                                key={`${id}-${idx}`}
                                component={childComponent}
                                {...childPath ? { path: path.join(route.path, childPath) } : {}}
                              />
                            );
                          }
                        })}
                      </Switch>
                    )}
                  </RouteComponent>
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
