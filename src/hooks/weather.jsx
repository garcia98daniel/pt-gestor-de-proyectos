// components/Weather.js

import React, { useState, useEffect } from "react";

const Weather = ({ onWeatherReponse }) => {
  const [city, setCity] = useState("");
  const [locationError, setLocationError] = useState(null);

  const apiKey = "34e9e9b7c5e82634ead2e68a2a4c3eaf";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, (error) => {
        setLocationError("Unable to retrieve your location");
      });
    } else {
      setLocationError("Geolocation is not supported by this browser");
    }
  }, []);

  const success = (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data.name);
        updateWeather(data.name);
      })
      .catch((error) => {
        console.error("There was a problem fetching the weather data:", error);
      });
  };

  const updateWeather = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onWeatherReponse(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the weather data:", error);
      });
  };

  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    updateWeather(city);
  };

  return null;
};

export default Weather;
