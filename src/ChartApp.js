import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';
import {fetchData} from '../src/views/app-views/components/charts/api/index';
import { Cards, CountryPicker, Chart,DoughnutChart } from '../src/views/app-views/components/charts/'; 
import { Route, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';
import styles from '../src/App.module.css';
const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

class ChartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {},
      country: '',
    };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }


  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };

 
  
  render() {
    const { data, country } = this.state;
    console.log(data)
    return (
    <div className="App">
  <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <DoughnutChart datas={data}country={country} />

      </div>
      
    </div>
    
  );
}
}
export default ChartApp;

