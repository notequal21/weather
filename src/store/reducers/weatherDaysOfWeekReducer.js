
let initialState = {
  days: [
    {
      iconURL: '',
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
      }
    },
    { icon: '', id: 1, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 2, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 3, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 4, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 5, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 6, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
    { icon: '', id: 7, desc: '', date: { day: '', current: '' }, temp: { day: 0, feelsLike: { day: 0 } } },
  ]
}

const weatherDaysOfWeekReducer = (state = initialState, action) => {

  switch (action.type) {



    default:
      return state
  }

}

export default weatherDaysOfWeekReducer