import { getWeatherInfoAPI } from "../../api/api"

const SET_CURRENT_LOCATION = 'currentWeather/SET-CURRENT-LOCATION'

let initialState = {
  currentLocation: 'moscow',
  coord: {
    lon: 0,
    lat: 0
  },
  weather: {
    iconURL: '',
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