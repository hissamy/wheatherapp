import React from "react"
import moment from "moment";

function convertKmphToMph(kmph) {
  return kmph * 0.621371;
}

function toSnakeCase(str) {
  return str.replace(/ /g, "_").toLowerCase();
}

const rowMapper=(row)=>{
  const time = `${moment(row.dt*1000).format("HH:mm")}`;
  const icon = `http://openweathermap.org/img/w/${row.weather[0].icon}.png`;
  const iconName = row.weather[0].description;
  const temp = `${Math.round(row.main.temp)}°C`;
  const arrowStyling = {transform: `rotate(${Math.round(row.wind.deg)}deg)`};
  const windSpeed = `${Math.round(convertKmphToMph(row.wind.speed))} mph`;
  const windDirection = `${Math.round(row.wind.deg)}°`;

  return(
    <div key={time} className="row weatherRow">
      <time className="timestamp col-3">{time}</time>
      <div className="icon col-3"><img src={icon} alt={iconName} title={iconName}/></div>
      <div className="temp col-3">{temp}</div>
      <div className="windspeed col-3"><img style={arrowStyling} src="/arrow.svg" alt={windDirection} title={windDirection}/>{windSpeed}</div>
    </div>
  )
}

const WeatherPanel =(props)=> {
//console.log(props,"WeatherPanel");
  const rows = props.weatherRows.map( rowMapper );

  return(
    <section id={toSnakeCase(props.day)} className="widget">
      <div className="container">
        {props.today ?
          <div>
            <h2 className="city">{props.city.name}</h2>
            <h3 className="day">Today</h3>
          </div> :
          <h3 className="day">{props.day}</h3> }
        {rows}
      </div>
    </section>
  )

}

export default WeatherPanel;
