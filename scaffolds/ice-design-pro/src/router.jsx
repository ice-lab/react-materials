import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { Suspense } from 'react';
import path from 'path';
import routes from '@/routerConfig';
import PageLoading from '@/components/PageLoading';

const Loading = (props) => {
  return (
    <Suspense fallback={<PageLoading />}>
      {props.children}
    </Suspense>
  );
};

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
                  children ? (
                    <RouteComponent key={id} {...props}>
                      <Loading>
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
                            }
                            return (
                              <Route
                                key={`${id}-${idx}`}
                                component={childComponent}
                                {...childPath ? { path: path.join(route.path, childPath) } : {}}
                              />
                            );
                          })}
                        </Switch>
                      </Loading>
                    </RouteComponent>
                  ) : (
                    <Loading>
                      <RouteComponent key={id} {...props} />
                    </Loading>
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
