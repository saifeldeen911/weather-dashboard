import React, { Component } from "react";

export default class WeatherDisplay extends Component {
  render() {
    const { weatherData } = this.props;

    if (!weatherData) {
      return null;
    }

    const { name, main, weather } = weatherData;

    return (
      <div className="bg-white shadow-sm rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-light mb-4">{name}</h2>
        <p className="text-5xl font-light mb-2">{Math.round(main.temp)}°C</p>
        <p className="text-gray-600 capitalize">{weather[0].description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Humidity: {main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    );
  }
}
