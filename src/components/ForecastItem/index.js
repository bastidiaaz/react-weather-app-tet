import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = (props) => {
  const {weekDay, hour, data} = props;
  return (
    <div>
      <div>{weekDay} Hora: {hour}</div>
      <WeatherData data={data}></WeatherData>
    </div>
  )
}

ForecastItem.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }).isRequired,
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired
};

export default ForecastItem;
