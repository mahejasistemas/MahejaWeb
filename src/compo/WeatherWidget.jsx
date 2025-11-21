import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Coordinates for Veracruz, Mexico
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=19.1738&longitude=-96.1342&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto'
                );
                const data = await response.json();
                setWeather(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather:', error);
                setLoading(false);
            }
        };

        fetchWeather();
        // Refresh every 30 minutes
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleWidget = () => {
        setIsOpen(!isOpen);
    };

    const getWeatherIcon = (code) => {
        // WMO Weather interpretation codes (WW)
        // 0: Clear sky
        // 1, 2, 3: Mainly clear, partly cloudy, and overcast
        // 45, 48: Fog and depositing rime fog
        // 51, 53, 55: Drizzle: Light, moderate, and dense intensity
        // 56, 57: Freezing Drizzle: Light and dense intensity
        // 61, 63, 65: Rain: Slight, moderate and heavy intensity
        // 66, 67: Freezing Rain: Light and heavy intensity
        // 71, 73, 75: Snow fall: Slight, moderate, and heavy intensity
        // 77: Snow grains
        // 80, 81, 82: Rain showers: Slight, moderate, and violent
        // 85, 86: Snow showers slight and heavy
        // 95: Thunderstorm: Slight or moderate
        // 96, 99: Thunderstorm with slight and heavy hail

        if (code === 0) return '☀️';
        if (code >= 1 && code <= 3) return '⛅';
        if (code >= 45 && code <= 48) return '🌫️';
        if (code >= 51 && code <= 67) return '🌧️';
        if (code >= 71 && code <= 77) return '❄️';
        if (code >= 80 && code <= 82) return '🌦️';
        if (code >= 95 && code <= 99) return '⛈️';
        return '🌡️';
    };

    if (loading) return null;

    const currentTemp = Math.round(weather?.current_weather?.temperature);
    const weatherCode = weather?.current_weather?.weathercode;
    const icon = getWeatherIcon(weatherCode);
    const minTemp = Math.round(weather?.daily?.temperature_2m_min[0]);
    const maxTemp = Math.round(weather?.daily?.temperature_2m_max[0]);

    return (
        <div className={`weather-widget-container ${isOpen ? 'open' : 'closed'}`}>
            <div className="weather-toggle" onClick={toggleWidget}>
                <span className="weather-icon">{icon}</span>
                <span className="weather-temp">{currentTemp}°C</span>
            </div>

            <div className="weather-content">
                <div className="weather-header">
                    <h3>Veracruz</h3>
                    <p className="weather-desc">Hoy</p>
                </div>
                <div className="weather-details">
                    <div className="weather-detail-item">
                        <span>Mín</span>
                        <strong>{minTemp}°C</strong>
                    </div>
                    <div className="weather-detail-item">
                        <span>Máx</span>
                        <strong>{maxTemp}°C</strong>
                    </div>
                    <div className="weather-detail-item">
                        <span>Viento</span>
                        <strong>{weather?.current_weather?.windspeed} km/h</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
