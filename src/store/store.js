
let store = {
  currentLocation: 'none',
  coord: {
    lon: 0,
    lat: 0
  },
  weather: {
    desc: 'none',
    feelsLike: 0,
    temp: {
      current: '0',
      min: '0',
      max: '0'
    }
  },

  days: [
    {
      id: 0,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    },
    {
      id: 1,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    },
    {
      id: 2,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    },
    {
      id: 3,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    },
    {
      id: 4,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    },
    {
      id: 5,
      temp: {
        day: 0,
        feelsLike: {
          day: 0
        }
      }
    }
  ]
}

export default store