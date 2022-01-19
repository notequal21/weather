
const SET_DAYS_WEATHER_INFO = 'weatherDaysOfWeek/SET-DAYS-WEATHER-INFO'

let initialState = {
  days: [
    {
      id: 0,
      desc: '',
      date: {
        day: '',
        current: '',
      },
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      },
      weather: [
        {
          icon: ''
        }
      ]
    },
  ]
}

const weatherDaysOfWeekReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DAYS_WEATHER_INFO:
      return {
        ...state,
        days: action.payload
      }

    default:
      return state
  }

}

export const setDaysWeatherInfoAction = (payload) => ({ type: SET_DAYS_WEATHER_INFO, payload })

export default weatherDaysOfWeekReducer