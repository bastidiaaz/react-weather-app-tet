import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
    constructor () {
      super();
      this.state = {
        selectedCity: null
      };
    }

    handleSelectedLocation = (selectedCity) => {
      this.setState({
        selectedCity
      });
    };

    render() {
      const { selectedCity } = this.state;
      return (
        <MuiThemeProvider>
          <Container>
            <Row>
              <Col md sm><AppBar title="Weather App"></AppBar></Col>
            </Row>
            <Row>
              <Col md xs={12}>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
              </Col>
              <Col md xs={12}>
                <Paper zDepth={2}>
                  <div className="detail d-flex justify-content-center align-items-center">
                    {(selectedCity ? <ForecastExtended city={selectedCity}></ForecastExtended> : <h2>Seleccione una ciudad</h2>)}
                  </div>
                </Paper>
              </Col>
            </Row>
          </Container>
        </MuiThemeProvider>
      );
    }

}

export default App;
