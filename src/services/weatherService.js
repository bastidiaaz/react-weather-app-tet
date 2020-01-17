import moment from 'moment';

const api_key = "801b56a8784ee93dca9eaedbc7bde44e";

const getWeatherData = async (location) => {
  const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
  const rawData = await fetch(api_weather);
  const weather_data = await rawData.json();
  const data = {
    temperature: Math.round(weather_data.main.temp - 273.15),
    weatherState: weather_data.weather[0].id,
    humidity: weather_data.main.humidity,
    wind: `${weather_data.wind.speed} m/s`
  };

  return data;
};

const getForecastData = async (location) => {
  const api_forecast = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api_key}`;
  const rawData = await fetch(api_forecast);
  const forecast_data = await rawData.json();
  const data = forecast_data.list.map((value) => {
    return {
      temperature: Math.round(value.main.temp - 273.15),
      weatherState: value.weather[0].id,
      humidity: value.main.humidity,
      wind: `${value.wind.speed} m/s`,
      date: moment(value.dt_txt)
    };
  });

  return data;
};

export {getWeatherData, getForecastData};
