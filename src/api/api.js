import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const getWeatherInfoAPI = {

  getCurrentWeather(currentLocation) {
    return (
      instance.get(`weather?q=${currentLocation}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
        .then(response => response.data)
    )
  }

}

// instance.get(`weather?q=${store.currentLocation}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
//   .then(response => {
//     store.currentLocation = response.data.name
//     store.coord.lon = response.data.coord.lon
//     store.coord.lat = response.data.coord.lat
//     store.weather.iconURL = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//     store.weather.desc = response.data.weather[0].description
//     store.weather.temp.current = Math.round(response.data.main.temp)
//     store.weather.temp.feelsLike = Math.round(response.data.main.feels_like)
//     store.weather.temp.min = Math.round(response.data.main.temp_max)
//     store.weather.temp.max = Math.round(response.data.main.temp_min)
//   })
// .then(() => {
//   instance.get(`onecall?lat=${store.coord.lat}&lon=${store.coord.lon}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
//     .then(response => {
//       store.days.forEach((item, index) => {
//         item.iconURL = `https://openweathermap.org/img/wn/${response.data.daily[index].weather[0].icon}@2x.png`
//         item.desc = response.data.daily[index].weather[0].description
//         item.temp.day = Math.round(response.data.daily[index].temp.day)
//         item.temp.feelsLike.day = Math.round(response.data.daily[index].feels_like.day)
//         item.date.day = new Date(response.data.daily[index].dt * 1000).getDay()
//         item.date.current = new Date(response.data.daily[index].dt * 1000)
//           .toLocaleString().split(',')[0].split('.')
//       })
//     })
// })