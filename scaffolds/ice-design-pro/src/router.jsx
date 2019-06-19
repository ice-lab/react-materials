/**
 * 定义应用路由
 */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import path from 'path';
// import history from './history';
import routes from './routerConfig';
import NotFound from './pages/Exception/NotFound';

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
                        {/* 普通路由 */}
                        {children.filter(routeChild => routeChild.path && routeChild.component)
                          .map((routeChild, idx) => {
                            const { component } = routeChild;
                            return (
                              <Route
                                key={`route-${id}-${idx}`}
                                component={component}
                                path={path.join(route.path, routeChild.path)}
                              />
                            );
                          })}
                        {/* Redirect路由 */}
                        {children.filter(routeChild => routeChild.redirect)
                          .map((routeChild, idx) => {
                            const { redirect } = routeChild;
                            return (
                              <Redirect
                                key={`redirect-${id}-${idx}`}
                                exact
                                from={path.join(route.path, routeChild.path)}
                                to={redirect}
                              />
                            );
                          })}
                        {/* 未匹配路由 */}
                        {children.filter(routeChild => !routeChild.path)
                          .map((routeChild, idx) => {
                            const { component } = routeChild;
                            return (
                              <Route
                                key={`notfound-${id}-${idx}`}
                                component={component}
                              />
                            );
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
