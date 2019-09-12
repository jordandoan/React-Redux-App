import React from 'react';
import { connect } from 'react-redux';

const Location = ({isFetching, results}) => {
  return (
    <div>
      {isFetching && <p>Fetching Location Data...</p>}
      {!isFetching && results && 
        <div className="location-card">
          <h2>{results.title}, {results.parent.title}</h2>
          <div>
            <p>Timezone: {results.timezone}</p>
            <p>Coordinates: {results.latt_long}</p>
            <p>Current Time: {results.time}</p>
            <p>Sunrise: {new Date(Date.parse(results.sun_rise)).toLocaleString()}</p>
            <p>Sunset: {new Date(Date.parse(results.sun_set)).toLocaleString()}</p>
          </div>
          <div className="weather-container">
            {results.consolidated_weather.map(day => 
              (<div className="weather-card">
                <h3>{day.applicable_date}</h3>
                <p>Min: {day.min_temp}</p>
                <p>Max: {day.max_temp}</p>
                <p>Current: {day.the_temp}</p>
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