/* eslint no-confusing-arrow: 0 */
import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageLoading from '../PageLoading';
import Authorized from './Authorized';

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, render, authority, redirectPath, ...rest } = this.props;
    return (
      <Authorized
        authority={authority}
        noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
      >
        <Route
          {...rest}
          render={props =>
            Component ? (
              <Suspense fallback={<PageLoading />}>
                <Component {...props} />
              </Suspense>
            ) : (
              render(props)
            )
          }
        />
      </Authorized>
    );
  }
}

export default AuthorizedRoute;
