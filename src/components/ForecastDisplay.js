import React, { Component } from 'react';

export default class ForecastDisplay extends Component {
  render() {
    const { forecastData } = this.props;

    if (!forecastData || !forecastData.list) {
      return null;
    }

    // Group forecast data by day
    const dailyForecasts = forecastData.list.reduce((acc, forecast) => {
      const date = new Date(forecast.dt * 1000).toDateString();
      if (!acc[date] && Object.keys(acc).length < 5) {
        acc[date] = forecast;
      }
      return acc;
    }, {});

    return (
      <div className="bg-white shadow-sm rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-light mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {Object.entries(dailyForecasts).map(([date, forecast]) => (
            <div key={date} className="text-center">
              <p className="font-medium">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <img 
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} 
                alt={forecast.weather[0].description}
                className="mx-auto"
              />
              <p className="text-sm">{Math.round(forecast.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}