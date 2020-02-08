import React, { useState } from 'react';
import SearchBar from './SearchBar';
import City from './City';

function WeatherApp() {
  // states
  const [cityWeatherData, setCityWeatherData] = useState({});
  const [cityNameInput, setCityNameInput] = useState('');
  const [alertStatus, toggleAlertStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [searchedCitiesList, setSearchedCitiesList] = useState([]);

  // function to set the city name state
  const inputOnChange = e => {
    const { value } = e.target;
    setCityNameInput(value);
  };

  // function to fetch the weather data as per the city name state
  const getCityWeatherData = async () => {
    try {
      const fetchedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
      );
      const jsonData = await fetchedData.json();
      await setCityWeatherData(jsonData);
      if (jsonData.cod === 200) await setSearchedCitiesList([jsonData, ...searchedCitiesList]);
      await setLoading(false);
    } catch (error) {
      console.log(error);
    }
    await setLoading(false);
  };

  // function to set the alert status
  const inputAlert = () => toggleAlertStatus(cityWeatherData.name ? false : true);

  // function to submit the input and fetch the data
  const clickSearchBtn = e => {
    if (cityNameInput) {
      e.preventDefault();
      setLoading(true);
      getCityWeatherData();
    }

    // validate & alert in case of wrong or empty input
    if (!cityWeatherData.name) {
      inputAlert();
    }

    // clearing the input field
    setCityNameInput('');
  };

  // delete a city box
  const deleteCityWeather = id => {
    setSearchedCitiesList(searchedCitiesList.filter(cityInfo => cityInfo.id !== id));
  };

  // button disabling function as per the length of the input
  const validInputLength = () => (cityNameInput.length < 1 ? true : false);

  return (
    <div style={searchBarStyle}>
      <h1>Weather</h1>

      <SearchBar
        clickSearchBtn={clickSearchBtn}
        inputOnChange={inputOnChange}
        inputValue={cityNameInput}
        validInputLength={validInputLength}
      />

      {!cityWeatherData.name && alertStatus && !isLoading && (
        <h1 style={errorBox}>Please enter a valid city name!</h1>
      )}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {searchedCitiesList.map(city => (
            <City key={city.id} city={city} deleteCityWeather={deleteCityWeather} />
          ))}
        </div>
      )}
    </div>
  );
}

const searchBarStyle = { textAlign: 'center' };

const errorBox = {
  width: '500px',
  margin: 'auto',
  background: '#eee',
  color: 'red',
  padding: '3%',
  fontFamily: 'arial',
};

export default WeatherApp;
