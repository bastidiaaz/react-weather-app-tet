import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LocationList from './components/LocationList';

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
