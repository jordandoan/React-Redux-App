import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE, RESET } from '../actions';

export const reducer  = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {...state, isFetching: true}
    case FETCH_SUCCESS:
      return {...state, results: action.payload, isFetching: false}
    case FETCH_FAILURE:
      return {...state, results: "", isFetching: false}
    case RESET:
      return initialState
    default:
      return state
  }
}

const initialState = {
  title: "Weather App",
  results: "",
  error: "",
  isFetching: false,
}

const initialFetch = {
  results: {"consolidated_weather":[{"id":6650024723218432,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SW","created":"2019-09-12T15:10:17.016572Z","applicable_date":"2019-09-12","min_temp":12.75,"max_temp":19.995,"the_temp":21.595,"wind_speed":3.1108462085341606,"wind_direction":224.47781183029755,"air_pressure":1014.745,"humidity":66,"visibility":13.753429968981148,"predictability":71},{"id":4747375904030720,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SW","created":"2019-09-12T15:10:20.391201Z","applicable_date":"2019-09-13","min_temp":12.780000000000001,"max_temp":20.54,"the_temp":22.21,"wind_speed":3.545445432625467,"wind_direction":235.39948247116706,"air_pressure":1013.915,"humidity":64,"visibility":14.379772130756383,"predictability":71},{"id":6141836273909760,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2019-09-12T15:10:23.304087Z","applicable_date":"2019-09-14","min_temp":12.8,"max_temp":17.115,"the_temp":18.345,"wind_speed":4.674197530592009,"wind_direction":227.02350499898554,"air_pressure":1013.4549999999999,"humidity":75,"visibility":12.507580728545296,"predictability":73},{"id":5995006911315968,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"WSW","created":"2019-09-12T15:10:26.085571Z","applicable_date":"2019-09-15","min_temp":11.565000000000001,"max_temp":17.275,"the_temp":16.99,"wind_speed":8.189017334319574,"wind_direction":244.98578366290224,"air_pressure":1012.48,"humidity":73,"visibility":14.89799570508232,"predictability":71},{"id":6310068129628160,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2019-09-12T15:10:29.171107Z","applicable_date":"2019-09-16","min_temp":11.43,"max_temp":18.13,"the_temp":19.36,"wind_speed":6.3474744971049075,"wind_direction":231.5670673873927,"air_pressure":1012.905,"humidity":65,"visibility":14.372626362045652,"predictability":73},{"id":5595002866499584,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SSW","created":"2019-09-12T15:10:32.008463Z","applicable_date":"2019-09-17","min_temp":11.77,"max_temp":16.03,"the_temp":10.85,"wind_speed":3.3878690447784936,"wind_direction":195.99999999999997,"air_pressure":1014.57,"humidity":81,"visibility":9.999726596675416,"predictability":73}],"time":"2019-09-12T10:55:40.311478-07:00","sun_rise":"2019-09-12T06:48:53.490296-07:00","sun_set":"2019-09-12T19:23:52.839048-07:00","timezone_name":"LMT","parent":{"title":"California","location_type":"Region / State / Province","woeid":2347563,"latt_long":"37.271881,-119.270233"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964","timezone":"US/Pacific"},
  error: "",
  isFetching: false,
}