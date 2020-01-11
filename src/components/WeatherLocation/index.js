import React from "react";
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData";
import getWeatherData from "../../services/weatherService";
import CircularProgress from "material-ui/CircularProgress";
import "./styles.css";

class WeatherLocation extends React.Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
  }

  static propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
  };

  handleUpdateClick = async () => {
    const data = await getWeatherData(this.state.city);
    this.setState({ data });
  };

  componentDidMount() {
    this.handleUpdateClick();
  }

  render() {
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? (
          <WeatherData data={data} />
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </div>
    );
  }
}

export default WeatherLocation;
