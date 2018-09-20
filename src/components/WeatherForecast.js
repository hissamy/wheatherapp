import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Dashboard from "./Dashboard";
import WeatherPanel from "./WeatherPanel";



const groupWeatherByDay=(list)=> {
  const days = new Map() // use Map as need we to maintain insertion order

  list.forEach( (w) => {
    const day = moment(w.dt*1000).format("dddd Do MMMM");
    if( !days[day] ) days[day] = []
    days[day].push(w)
  })

  return days;
}



const WeatherForecast = ({ data }) => {

    const { city, list } = data;
    const { name } = city;
    const rows = groupWeatherByDay( list || [] );
    const keys=Object.keys(rows);
    const weatherPanels = keys.map( (day, index) => (
      <WeatherPanel key={day} today={index===0} day={day} city={city} weatherRows={rows[day]}/>
    ));
    console.log("weatherPanels",weatherPanels);
    return (
      <div className="weather-forecast-wrapper">
        <Dashboard city={name} />
        <main>
      {weatherPanels}
    </main>
       
       
      </div>
    );
};

export default WeatherForecast;