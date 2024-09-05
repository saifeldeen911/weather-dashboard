const API_KEY = '2a911cfb58bffb50d35c399de8edee1c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

export const fetchForecastData = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  return response.json();
};