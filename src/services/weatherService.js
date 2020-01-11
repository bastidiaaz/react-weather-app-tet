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

export default getWeatherData;
