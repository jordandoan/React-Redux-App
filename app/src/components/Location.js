import React from 'react';
import { connect } from 'react-redux';

const Location = ({isFetching, results}) => {
  const URL = "https://www.metaweather.com/static/img/weather/"
  return (
    <div>
      {isFetching && <p>Fetching Location Data...</p>}
      {!isFetching && results && 
        <div className="location-card">
          <h2>
            {results.title}, {results.parent.title} 
            <span className="time"> 
                {new Date(Date.parse(results.time)).toLocaleTimeString()}
            </span>
          </h2>
          
          <div className="info">
            <p>Timezone: {results.timezone}</p>
            <p>Coordinates: {results.latt_long}</p>
            <p>Current Time: {results.time}</p>
            <p>Sunrise: {new Date(Date.parse(results.sun_rise)).toLocaleString()}</p>
            <p>Sunset: {new Date(Date.parse(results.sun_set)).toLocaleString()}</p>
          </div>
          <div className="weather-container">
            {results.consolidated_weather.map((day, idx) => 
              (<div className="weather-card" key={day.id}>
                { idx == 0 ? <h3>Today</h3> : ( idx === 1 ? <h3>Tomorrow</h3> : <h3>{day.applicable_date}</h3>)}
                <h4>{day.weather_state_name}</h4>
                <img src={`${URL}${day.weather_state_abbr}.svg`} alt={day.weather_state_name} />
                <div className="stats">
                  <p>Min: {Math.round(day.min_temp * 9/5 + 32)}</p>
                  <p>Max: {Math.round(day.max_temp * 9/5 + 32)}</p>
                  <p>Current: {Math.round(day.the_temp * 9/5 + 32)}</p>
                  <p>RH: {day.humidity}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
    isFetching: state.isFetching,
    error: state.error,
  }
}
export default connect(mapStateToProps, {})(Location);