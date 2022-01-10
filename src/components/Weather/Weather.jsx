import { Divider } from "antd"
import style from "./Weather.module.scss"
import axios from 'axios';
import store from '../../store/store'

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

let location = 'moscow'

instance.get(`weather?q=${location}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
  .then(response => {
    store.currentLocation = response.data.name
    store.coord.lon = response.data.coord.lon
    store.coord.lat = response.data.coord.lat
    store.weather.desc = response.data.weather[0].description
    store.weather.temp.current = response.data.main.temp
    store.weather.temp.feelsLike = response.data.main.feels_like
    store.weather.temp.min = response.data.main.temp_max
    store.weather.temp.max = response.data.main.temp_min
    // console.log(response.data.main);
  })
  .then(() => {
    instance.get(`onecall?lat=${store.coord.lat}&lon=${store.coord.lon}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
      .then(response => {
        store.days.forEach((item, index) => {
          item.temp.day = response.data.daily[index].temp.day
          item.temp.feelsLike.day = response.data.daily[index].feels_like.day
        })
        // store.days[0].temp.day = response.data.daily[0].temp.day
        // store.days[0].temp.feelsLike.day = response.data.daily[0].feels_like.day
        // console.log(response.data.daily[0].temp);
      })
  })

let CurrentWeather = (props) => {
  return (
    <>
      <div className={`${style.weatherBody__current}`}>
        <div className={`${style.weatherBody__title}`}>
          Current weather
        </div>
        <Divider />
        <div className={`${style.weatherItem__content}`}>
          <div className={`${style.weatherItem__contentItem}`}>
            Desc: {store.weather.desc}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Temp: {store.weather.temp.current}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Feels like: {store.weather.temp.feelsLike}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            TempMin: {store.weather.temp.min}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            TempMax: {store.weather.temp.max}
          </div>
          <Divider />
          <div className={`${style.weatherItem__contentItem}`}>
            Coord lon: {store.coord.lon}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Coord lat: {store.coord.lat}
          </div>
        </div>
      </div>
    </>
  )
}

let WeatherDay = (props) => {
  return (
    <>
      <div className={`${style.weatherBody__daysItem}`}>
        <div className={`${style.weatherBody__title}`}>
          Tuesday
        </div>
        <Divider />
        <div className={`${style.weatherItem__content}`}>
          <div className={`${style.weatherItem__contentItem}`}>
            Temp: {props.dayTemp}
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Feels Like: {props.feelsLike}
          </div>
        </div>
      </div>
    </>
  )
}
let daysList = []
setInterval(() => {
  daysList = store.days.map((item, index) => <WeatherDay
    key={item.id} id={item.id} dayTemp={store.days[index].temp.day}
    feelsLike={store.days[index].temp.feelsLike.day} />)
}, 100)

let Weather = () => {
  return (
    <>
      <div className={`${style.weather}`}>
        <div className="container">

          <div className={`${style.weather__city}`}>
            Your current location: {store.currentLocation}
          </div>
          <Divider />
          <div className={`${style.weatherBody}`}>

            <CurrentWeather />

            <div className={`${style.weatherBody__days}`}>

              {daysList}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Weather