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
    iconURL: '01d',
    desc: 'none',
    feelsLike: 0,
    temp: {
      current: '0',
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
        weather: {
          iconURL: action.payload.icon,
          desc: action.payload.description,
          feelsLike: 0,
          temp: {
            current: '0',
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