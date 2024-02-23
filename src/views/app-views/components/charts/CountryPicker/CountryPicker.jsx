import React, { useState, useEffect } from 'react';
//import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../api';

import styles from './CountryPicker.module.css';
import { Form, Select } from 'antd';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
      console.log(countries)
    };

    fetchAPI();
  }, []);

  return (
    <div>
    <h4>Select The Country</h4>
    <Form>
      <Select 
      defaultValue="" onChange={(e) => handleCountryChange(e)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Select>
    </Form>
    </div>
  );
};
export default Countries;
