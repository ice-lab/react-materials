import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { Suspense } from 'react';
import path from 'path';
import routes from '@/routerConfig';
import PageLoading from '@/components/PageLoading';

const ChildRoute = (props) => {
  const { redirect, path: routePath, component, key } = props;
  if (redirect) {
    return (
      <Redirect
        key={key}
        exact
        from={routePath}
        to={redirect}
      />
    );
  }
  return (
    <Route
      key={key}
      component={component}
      path={routePath}
    />
  );
};

const router = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const { component: RouteComponent, children, ...others } = route;
          return (
            <Route
              key={id}
              {...others}
              component={(props) => {
                return (
                  children ? (
                    <RouteComponent key={id} {...props}>
                      <Suspense fallback={<PageLoading />}>
                        <Switch>
                          {children.map((routeChild, idx) => {
                            const { redirect, path: childPath, component: ChildComponent } = routeChild;
                            const routeKey = `${id}-${idx}`;
                            const routePath = childPath ? path.join(route.path, childPath) : null;
                            return (
                              <ChildRoute
                                key={routeKey}
                                redirect={redirect}
                                path={routePath}
                                component={ChildComponent}
                              />
                            );
                          })}
                        </Switch>
                      </Suspense>
                    </RouteComponent>
                  ) : (
                    <Suspense fallback={<PageLoading />}>
                      <ChildRoute
                        key={id}
                        {...props}
                      />
                    </Suspense>
                  )
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
