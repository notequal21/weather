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
    store.weather.temp.min = response.data.main.temp
    store.weather.temp.max = response.data.main.temp
    store.weather.temp.max = response.data.main.temp
    console.log(response.data);
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
            Temp
          </div>
        </div>
      </div>
    </>
  )
}

let daysList = store.days.map(item => <WeatherDay key={item.id} />)

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