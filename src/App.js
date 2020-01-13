import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/LocationList';

import { Container, Row, Col } from 'react-bootstrap';
import { Paper, AppBar } from 'material-ui';
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
    handleSelectedLocation = (city) => {
      console.log("handleSelectionLocation", city);
    };

    render() {
      return (
        <MuiThemeProvider>
          <div className="App">
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
          </div>
        </MuiThemeProvider>
      );
    }

}

export default App;
