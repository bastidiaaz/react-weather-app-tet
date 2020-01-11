import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const handleWeatherLocationClick = (city, onSelectedLocation) => {
  console.log("handleWeatherLocationClick", city);
  onSelectedLocation(city);
};


const LocationList = (props) => {
  const { cities, onSelectedLocation } = props;

  const strToComponents = (cities) => {
    return cities.map((city) => {
      return <WeatherLocation key={city} city={city} onWeatherLocationClick={() => {
          handleWeatherLocationClick(city, onSelectedLocation);
      }}/>
    });
  };

  return (
    <div>
      {strToComponents(cities)}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired
};

export default LocationList;
