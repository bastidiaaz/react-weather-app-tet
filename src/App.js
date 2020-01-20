import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Paper, AppBar } from 'material-ui';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import "./App.css";

const cities = [
  "Temuco",
  "Santiago",
  "Madrid",
  "Bern",
  "Milan",
  "Lima"
];

class App extends React.Component {
    render() {
      return (
        <MuiThemeProvider>
          <div className="container">
            <div className="row">
              <div className="col-md col-sm"><AppBar title="Weather App"></AppBar></div>
            </div>
            <div className="row">
              <div className="col-md col-xs-12">
                <LocationListContainer cities={cities}/>
              </div>
              <div className="col-md col-xs-12">
                <Paper zDepth={2}>
                  <div className="detail d-flex justify-content-center">
                    <ForecastExtendedContainer></ForecastExtendedContainer>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }

}

export default App;
