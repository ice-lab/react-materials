import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import path from 'path';
import { getBasename } from '@ice/stark';
import routes from '@/config/routes';

const RouteItem = props => {
  const { redirect, path: routePath, component, key } = props;
  if (redirect) {
    return <Redirect exact key={key} from={routePath} to={redirect} />;
  }
  return <Route key={key} component={component} path={routePath} />;
};

export default () => {
  return (
    <Router basename={getBasename()}>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          return (
            <Route
              key={id}
              {...others}
              component={props => {
                return children ? (
                  <RouteComponent key={id} {...props}>
                    <Switch>
                      {children.map((child, idx) => {
                        const { path: childPath, ...childOthers } = child;
                        return (
                          <RouteItem
                            {...childOthers}
                            key={`${id}-${idx}`}
                            path={childPath && path.join(route.path, childPath)}
                          />
                        );
                      })}
                    </Switch>
                  </RouteComponent>
                ) : (
                  <RouteItem key={id} {...props} />
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};
