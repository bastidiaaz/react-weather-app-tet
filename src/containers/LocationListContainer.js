import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends React.Component {
  handleSelectedLocation = (selectedCity) => {
    this.setState({
      selectedCity
    });
    this.props.selectCity(selectedCity);
  };

  static propTypes = {
    cities: PropTypes.array.isRequired,
    selectCity: PropTypes.func.isRequired
  };

  render () {
    const {cities} = this.props;
    return (<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCity: (value) => {
      return dispatch(selectCity(value));
    }
  }
};

export default connect(null, mapDispatchToProps)(LocationListContainer);
