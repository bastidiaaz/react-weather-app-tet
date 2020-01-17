import React from 'react';
import PropTypes from 'prop-types';
import Location from './WeatherLocation/Location';
import ForecastItem from './ForecastItem';
import CircularProgress from "material-ui/CircularProgress";
import { getForecastData } from './../services/weatherService';
import './styles.css';

class ForecastExtended extends React.Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  static propTypes = {
    city: PropTypes.string.isRequired
  };

  async componentDidMount() {
    const { city } = this.props;
    const forecastData = await getForecastData(city);
    this.setState({forecastData});
  }

  async componentDidUpdate(prevProps, prevState) {
    const { city } = this.props;
    if (prevProps.city !== city) {
      this.setState({forecastData: null});
      const forecastData = await getForecastData(city);
      this.setState({forecastData});
    }
  }

  getForecastItemsByRange = (range) => {
    const { city } = this.props;
    return range.map((value) => {
      const weekDay = value.date.format('dddd DD');
      const hour = value.date.format('HH:mm');
      return (<ForecastItem key={`${city}-${weekDay}-${hour}`} weekDay={weekDay} hour={hour} data={value}></ForecastItem>);
    });
  };

  render () {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div className="forecastExtended d-flex flex-column align-items-center">
        <Location city={city}></Location>
        {(forecastData ? this.getForecastItemsByRange(forecastData) : <CircularProgress />)}
      </div>
    )
  }
}

export default ForecastExtended;
