
const SET_CURRENT_LOCATION = 'currentWeather/SET-CURRENT-LOCATION'

let initialState = {
  currentLocation: 'москва',
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
        ...state
      }

    default:
      return state

  }

}

export default currentWeatherReducer