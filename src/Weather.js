import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
 // let [icon, setIcon] = useState("");

  function showForecast(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
   // setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
         let apiKey = "42776befd778795724824300403642a2";
    let unit = "metric";
    let headlineURL = "https://api.openweathermap.org/data/2.5/weather?";
    let url = `${headlineURL}q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <h1>Weather App</h1>;
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <div className="List">
        <ul>
          <li>Temperature: {temp} ºC</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>
    </div>
  );
  }


 //   <li>      
 //          <img src="http://openweathermap.org/img/wn/{icon}@2x.png "alt=""/>
  //        </li>

