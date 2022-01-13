import { getWeatherInfoAPI } from "../../api/api"

const SET_CURRENT_LOCATION = 'currentWeather/SET-CURRENT-LOCATION'
const SET_WEATHER_INFO = 'currentWeather/SET-WEATHER-INFO'

let initialState = {
  currentLocation: 'moscow',
  coord: {
    lon: 0,
    lat: 0
  },
  weather: {
    iconID: '01d',
    descriptoin: 'none',
    temp: {
      current: '0',
      feelsLike: 0,
      min: '0',
      max: '0'
    }
  }
}

const currentWeatherReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      }
    case SET_WEATHER_INFO:
      return {
        ...state,
        coord: {
          lon: action.payload.coord.lon,
          lat: action.payload.coord.lat
        },
        weather: {
          iconID: action.payload.weather[0].icon,
          desc: action.payload.weather[0].description,
          temp: {
            current: action.payload.main.temp,
            feelsLike: action.payload.main.feels_like,
            min: '0',
            max: '0'
          }
        }
      }

    default:
      return state

  }

}

// export const setCurrentLocation = (SET_CURRENT_LOCATION, currentLocation) =>
//   ({ SET_CURRENT_LOCATION, currentLocation })

// export const requestCurrentLocation = (location) => async (dispatch) => {
//   let data = await getWeatherInfoAPI.getCurrentWeather(location)
//   console.log(data.name);
//   dispatch(setCurrentLocation(data.name))
// }

export default currentWeatherReducer