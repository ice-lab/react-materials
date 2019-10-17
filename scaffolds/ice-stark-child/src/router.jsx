import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import path from 'path';
import { getBasename } from '@ice/stark-app';
import routes from '@/config/routes';

const RouteItem = props => {
  const { redirect, path: routePath, component, key, ...others } = props;
  if (redirect) {
    return <Redirect exact key={key} from={routePath} to={redirect} {...others} />;
  }
  return <Route key={key} component={component} path={routePath} {...others}/>;
};

export default () => {
  return (
    <Router basename={getBasename()}>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          if (!children) {
            return RouteItem({
              key: id,
              ...route,
            });
          } else {
            return (
              <Route
                key={id}
                {...others}
                component={props => {
                  return (
                    <RouteComponent key={id} {...props}>
                      <Switch>
                        {children.map((routeChild, idx) => {
                          const { path: childPath } = routeChild;
                          return RouteItem({
                            key: `${id}-${idx}`,
                            ...routeChild,
                            path: childPath && path.join(route.path, childPath),
                          });
                        })}
                      </Switch>
                    </RouteComponent>
                  );
                }}
              />
            );
          }
        })}
      </Switch>
    </Router>
  );
};
