import React from "react";
import "./DisplayWeather.css";

function DisplayWeather({ data }) {
  console.log(data);

  const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  return (
    <div className="displayweather">
      <div className="maincard">
        <span className="cardtitle">
          {data.name}, {data.sys.country}, Weather
        </span>
        <span className="cardsubtitle">
          As of {new Date().toLocaleTimeString()}
        </span>
        <h1>{Math.floor((data.main.temp - 273.15) * 1.8) + 32}°F</h1>
        <span className="weather-main">
          {data.weather[0].main}
          <img src={iconurl} alt="Weather Image" className="weather-icon" />
        </span>
        <span className="weather-description">
          {data.weather[0].description}
        </span>
      </div>
      <div className="weatherdetails">
        <div className="section1">
          <table>
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                  {Math.floor((data.main.temp_max - 273.15) * 1.8) + 32}°F / {Math.floor((data.main.temp_min - 273.15) * 1.8) + 32}°F
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Humidity</h4>
              </td>
              <td>
                <span>
                  {data.main.humidity}%
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Pressure</h4>
              </td>
              <td>
                <span>
                  {data.main.pressure} hPa
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Visibility</h4>
              </td>
              <td>
                <span>
                  {Math.round(data.visibility / 1609)} Miles
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Wind</h4>
              </td>
              <td>
                <span>
                  {data.wind.speed} mph at {data.wind.deg}°
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Sunrise</h4>
              </td>
              <td>
                <span>
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Sunset</h4>
              </td>
              <td>
                <span>
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather;
