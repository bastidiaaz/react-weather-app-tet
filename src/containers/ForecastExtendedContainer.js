import React from 'react';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends React.Component {
  render () {
    const {city} = this.props;

    return (
      city ? <ForecastExtended city={city}></ForecastExtended> : <h2>Seleccione una ciudad</h2>
    );
  }
}

const mapStateToProps = (state) => ({city: state.city});
export default connect(mapStateToProps, null)(ForecastExtendedContainer);
