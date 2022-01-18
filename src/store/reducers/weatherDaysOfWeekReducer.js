
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
    // { iconID: '', id: 1, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 2, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 3, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 4, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 5, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 6, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    // { iconID: '', id: 7, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
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

export default weatherDaysOfWeekReducer