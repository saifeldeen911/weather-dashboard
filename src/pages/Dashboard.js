import React, { Component } from "react";
import CityInputForm from "../components/CityInputForm";
import WeatherDisplay from "../components/WeatherDisplay";
import ForecastDisplay from "../components/ForecastDisplay";
import { fetchWeatherData, fetchForecastData } from "../services/weatherApi";

export default class Dashboard extends Component {
  state = {
    weatherData: null,
    forecastData: null,
    error: null,
  };

  componentDidMount() {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage = () => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      this.fetchWeather(lastSearch);
    }
  };

  fetchWeather = async (city) => {
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherData(city),
        fetchForecastData(city),
      ]);
      this.setState({ weatherData, forecastData, error: null });
      localStorage.setItem("lastSearch", city);
      this.updateSearchHistory(city);
    } catch (error) {
      this.setState({
        error: "Failed to fetch weather data. Please try again.",
      });
    }
  };

  updateSearchHistory = (city) => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(city)) {
      history.unshift(city);
      if (history.length > 5) history.pop();
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  };

  render() {
    const { weatherData, forecastData, error } = this.state;

    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-6">Weather Dashboard</h1>
        <CityInputForm onSubmit={this.fetchWeather} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <WeatherDisplay weatherData={weatherData} />
        <ForecastDisplay forecastData={forecastData} />
      </div>
    );
  }
}
