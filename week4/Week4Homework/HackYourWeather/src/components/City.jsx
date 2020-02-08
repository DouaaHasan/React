import React from 'react';
import { Link } from 'react-router-dom';

const City = ({ city, deleteCityWeather }) => {
  const { name, sys, weather, main, coord, id } = city;
  return (
    <div style={cityBox}>
      <button style={del_btn} onClick={() => deleteCityWeather(id)}>
        x
      </button>
      <Link style={{ textDecoration: 'none', color: 'black' }} key={city.id} to={`/${city.id}`}>
        <h1>{name && `${name}, ${sys && sys.country}`}</h1>
        <h2>{weather && weather[0].main}</h2>
        <h4>{weather && weather[0].description}</h4>
        <p>{`min temp: ${main && main.temp_min}`}</p>
        <p>{`max temp: ${main && main.temp_max}`}</p>
        <p>{`location: ${coord && coord.lon},${coord && coord.lat}`}</p>
      </Link>
    </div>
  );
};

const cityBox = {
  fontFamily: 'Helvetica',
  textAlign: 'left',
  border: 'solid',
  color: 'Black',
  height: '300px',
  width: '500px',
  margin: 'auto auto 3%',
  padding: '1% 3%',
};
const del_btn = {
  float: 'right',
  border: '3px solid black',
  borderRadius: '50%',
  fontSize: '2rem',
};

export default City;
