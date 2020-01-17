import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './styles.css';

const ForecastItem = (props) => {
  const {weekDay, hour, data} = props;
  return (
    <div className="forecastItem container">
      <div className="row">
        <div className="col-sm-3 d-flex flex-column justify-content-center">
          <div>{weekDay}</div>
          <div>Hora: {hour}</div>
        </div>
        <div className="col-sm-9 container">
          <WeatherData data={data}></WeatherData>
        </div>
      </div>
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
