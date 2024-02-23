import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Users = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/users`} />
      <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
      <Route path={`${match.url}/create`} component={lazy(() => import(`./create`))} />
      <Route path={`${match.url}/user/edit/:id`} component={lazy(() => import(`../users/edituser`))} />

    </Switch>
  </Suspense>
);

export default Users;