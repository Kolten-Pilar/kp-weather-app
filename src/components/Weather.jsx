import React, { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";

function Weather() {
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const [weather, setWeather] = useState([]);


  const APIKEY = import.meta.env.VITE_API_KEY;

  // fetching weather data
  async function weatherData(e) {
    e.preventDefault();

    // checking if city and country is entered
    if (form.city == "") {
      alert("Please enter city name");
    } else {
      try {
         // making the api call
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      );
      const data = await res.json();
      // console.log(res);
      setWeather({data : data})
      } catch (error) {
        console.log(error);
      }
     
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  //  console.log(form.city, form.country);
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />

      <form action="">
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        ></input>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        ></input>
        <button className="getweather" onClick={weatherData}>
          Submit
        </button>
      </form>

      {
        weather.data !== undefined ? 
        <div>
          <DisplayWeather data={weather.data}/>
        </div> : 
        null
      }

    </div>
  );
}

export default Weather;
