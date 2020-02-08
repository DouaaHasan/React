import React from 'react';
import CitiesData from '../city-weather.json';
import City from './City';

function CityList() {
  return (
    <div>
      <h1 style={{ padding: '4%', textAlign: 'center' }}>Weather</h1>
      {CitiesData.map(cityData => (
        <City key={cityData.id} cityData={cityData} />
      ))}
    </div>
  );
}
export default CityList;
