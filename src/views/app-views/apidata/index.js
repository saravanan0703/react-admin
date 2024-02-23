import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Transactions = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/datas`} />
      <Route path={`${match.url}`} component={lazy(() => import(`./apidata`))} />
    </Switch>
  </Suspense>
);

export default Transactions;