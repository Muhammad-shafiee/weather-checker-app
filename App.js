import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('/weatherData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Checker</h1>
      <div className="weather-list">
        {weatherData.map(weather => (
          <div key={weather.id} className="weather-card">
            <h2>{weather.city}</h2>
            <p><strong>Temperature:</strong> {weather.temperature}°C</p>
            <p><strong>Description:</strong> {weather.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
