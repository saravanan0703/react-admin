import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Transactions = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/lists`} />
      <Route path={`${match.url}/lists`} component={lazy(() => import(`./translists`))} />
      <Route path={`${match.url}/invoice/:id`} component={lazy(() => import(`./invoice`))} />

    </Switch>
  </Suspense>
);

export default Transactions;