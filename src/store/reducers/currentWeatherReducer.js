
const SET_WEATHER_INFO = 'currentWeather/SET-WEATHER-INFO'

let initialState = {
  currentLocation: 'none',
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
    case SET_WEATHER_INFO:
      return {
        ...state,
        currentLocation: action.payload.name,
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

export const setWeatherInfoAction = (payload) => ({ type: SET_WEATHER_INFO, payload })

export default currentWeatherReducer