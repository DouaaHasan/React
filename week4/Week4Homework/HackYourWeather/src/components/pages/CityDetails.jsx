import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

function CityDetails({ match, history }) {
  const [fiveDaysWeather, setFiveDaysWeather] = useState({});

  const getFiveDaysForecast = async () => {
    const fetchedData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    );
    const jsonData = await fetchedData.json();
    await setFiveDaysWeather(jsonData);
  };

  useEffect(() => {
    getFiveDaysForecast();
  }, []);

  const { list, city } = fiveDaysWeather;

  return (
    <div className='container'>
      <h2 style={cityDetailsHeaderStyle}>5 Days Forecast</h2>
      <div style={{ width: '60%', margin: 'auto' }}>
        <h1>{`${city && city.name}, ${city && city.country}`}</h1>
        <AreaChart
          width={800}
          height={350}
          data={list}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='dt_txt' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='main.temp'
            name='temperature'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </div>
      <div>
        <button
          style={{
            fontSize: '1.2rem',
            background: 'lightGray',
            width: '10%',
            border: '1px solid black',
            padding: '1%',
            borderRadius: '20%',
            margin: 'auto 0 0 5%',
          }}
          onClick={() => history.push('/')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

const cityDetailsHeaderStyle = {
  textAlign: 'center',
  width: '25%',
  margin: '3% auto',
  padding: '1%',
  background: 'lightGray',
};

export default withRouter(CityDetails);
