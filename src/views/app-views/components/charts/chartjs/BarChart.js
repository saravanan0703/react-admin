import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import { CountryPicker } from '../index';
import { fetchDailyData,fetchData } from '../api';
import styles from '../chartjs/css/Chart.module.css';
//import ChartApp from '/home/quilltez/Public/laravel-react/Emilus - React Admin Template/demo/src/ChartApp.js';


const Chart = (props) => {
	console.log(props)
  const [dailyData, setDailyData] = useState({});
  const confirmed =props.data? props.data['confirmed'] : 0;
  const recovered =props.data? props.data['recovered'] : 0;
  const deaths =props.data? props.data['deaths'] : 0;;
  const country=props.country;
  console.log(props.data? props.data['confirmed']: 0)

	//console.log(country);
	//console.log(data)

  useEffect(() => {
    const fetchMyAPI = async () => {
      //  Load the Daily For Linear Chart from the dalydata Function and we can use it as dailyData in Linear Return
    const initialDailyData = await fetchDailyData();
	console.log(initialDailyData)
      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);
  

  const barChart = (
	confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)', 'rgba(53, 162, 235, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    )  : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            //  Loading the dailyData into a Data and using it as data.values
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );



  return (
    <div className={styles.container}>
      { country ? barChart : lineChart }<CountryPicker  />
    </div>

  );
};


export default Chart;
//ReactDOM.render(<ChartApp />, document.getElementById('root'));
