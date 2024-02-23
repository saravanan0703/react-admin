import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProdCreate from './add-data';
import GoogleMap from './google-map';
import SimpleMap from './simple-map';
import ProdView from './order';
import Checkout from './checkout'
import UserCreates from './user/create';
import EditUser from './edituser';

const MapComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/google-map`} />
      <Route path={`${match.url}/google-map`} component={GoogleMap} />
      <Route path={`${match.url}/simple-map`} component={SimpleMap} />
      <Route path={`${match.url}/add-data`} component={ProdCreate} />
      <Route path={`${match.url}/order/:id`} component={ProdView} />
      <Route path={`${match.url}/checkout/:id`} component={Checkout} />
      <Route path={`${match.url}/user/create`} component={UserCreates} />
      <Route path={`${match.url}/edit/user/:id`} component={EditUser} />



    </Switch>
  </div>
);

export default MapComponents;