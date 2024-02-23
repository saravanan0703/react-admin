import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/dashboards`} component={lazy(() => import(`./dashboards`))} />
        <Route path={`${APP_PREFIX_PATH}/apps`} component={lazy(() => import(`./apps`))} />
        <Route path={`${APP_PREFIX_PATH}/components`} component={lazy(() => import(`./components`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} component={lazy(() => import(`./pages`))} />
        <Route path={`${APP_PREFIX_PATH}/maps`} component={lazy(() => import(`./maps`))} />
        <Route path={`${APP_PREFIX_PATH}/charts`} component={lazy(() => import(`./charts`))} />
        <Route path={`${APP_PREFIX_PATH}/docs`} component={lazy(() => import(`./docs`))} />
        <Route path={`${APP_PREFIX_PATH}/users`} component={lazy(() => import(`./users`))} />
        <Route path={`${APP_PREFIX_PATH}/order/:id`} component={lazy(() => import(`./order`))} />
        <Route path={`${APP_PREFIX_PATH}/checkout/:id`} component={lazy(() => import(`./checkout`))} />
        <Route path={`${APP_PREFIX_PATH}/products`} component={lazy(() => import(`./products`))} />
        <Route path={`${APP_PREFIX_PATH}/user/edit/:id`} component={lazy(() => import(`./users/edituser`))} />
        <Route path={`${APP_PREFIX_PATH}/transactions`} component={lazy(() => import(`./transactions`))} />
        <Route path={`${APP_PREFIX_PATH}/apidata`} component={lazy(() => import(`./apidata`))} />

        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboards`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
