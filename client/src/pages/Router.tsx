import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Path from './paths';
import Profile from './profile';

const Home = React.lazy(
  () => import('./home' /* webpackChunkName: "home", webpackPreload: true */),
);

const Callback = React.lazy(
  () =>
    import('./callback' /* webpackChunkName: "home", webpackPreload: true */),
);

const NotFound = React.lazy(
  () => import('./not-found' /* webpackChunkName: "not-found" */),
);

const Router = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path={Path.Root}>
        <Home />
      </Route>
      <Route exact path={Path.Callback}>
        <Callback />
      </Route>
      <Route exact path={'/profile'}>
        <Profile />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Suspense>
);

export default Router;
