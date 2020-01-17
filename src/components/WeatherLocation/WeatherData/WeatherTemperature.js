import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import './styles.css';

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="d-flex justify-content-start align-items-center">
    <WeatherIcon className="wicon" name={"owm"} iconId={`${weatherState}`}/>
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">C°</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.number
};

export default WeatherTemperature;
