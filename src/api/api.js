import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const getWeatherInfoAPI = {

  getCurrentWeather(location) {
    return (
      instance.get(`weather?q=${location}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
        .then(response => response.data)
    )
  },

  getDaysWeather(lat, lon) {
    return (
      instance.get(`onecall?lat=${lat}&lon=${lon}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
        .then(response => response.data)
    )
  }

}