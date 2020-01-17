import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
  const { temperature, weatherState, humidity, wind } = data;
  return (
    <div className='row weatherDataCont d-flex p-0'>
      <div className="col-sm-6 d-flex justify-content-center">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
      </div>
      <div className="col-sm-6 d-flex justify-content-center">
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
      </div>
    </div>
  );
}

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherData;
