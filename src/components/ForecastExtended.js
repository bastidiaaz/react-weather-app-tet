import React from 'react';
import PropTypes from 'prop-types';
import Location from './WeatherLocation/Location';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const data = {
  temperature: 10,
  weatherState: 801,
  humidity: 10,
  wind: '10 m/s'
};

class ForecastExtended extends React.Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  getForecastItemsByRange = (range) => {
    const { city } = this.props;
    return range.map((value) => {
      return (<ForecastItem key={`${city}-${value}`} weekDay={value} hour={"13:00"} data={data}></ForecastItem>);
    });
  };

  render () {
    const { city } = this.props;
    return (
      <div>
        <Location city={city}></Location>
        {this.getForecastItemsByRange(days)}
      </div>
    )
  }
}

export default ForecastExtended;
