import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Apex from './apex';
import ChartJs from './chartjs';
import ChartApp from 'ChartApp'

const ChartsComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/apex-charts`} />
      <Route path={`${match.url}/apex-charts`} component={Apex} />
      <Route path={`${match.url}/chartjs`} component={ChartJs} />
    </Switch>
  </div>
);

export default ChartsComponents;

export { default as Chart } from '../charts/chartjs/BarChart';
export { default as CountryPicker } from '../charts/CountryPicker/CountryPicker';
export { default as ChartApp } from 'ChartApp';
export { default as DoughnutChart } from '../charts/chartjs/DoughnutChart';

//export { default as Cards } from '../charts/Cards/Cards';
