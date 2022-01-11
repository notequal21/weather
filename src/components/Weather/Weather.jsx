import { Divider } from "antd"
import style from "./Weather.module.scss"
import axios from 'axios';
import store from '../../store/store'

export const getWeatherInfo = () => {
  const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
  })

  instance.get(`weather?q=${store.currentLocation}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
    .then(response => {
      store.currentLocation = response.data.name
      store.coord.lon = response.data.coord.lon
      store.coord.lat = response.data.coord.lat
      store.weather.icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      store.weather.desc = response.data.weather[0].description
      store.weather.temp.current = Math.round(response.data.main.temp)
      store.weather.temp.feelsLike = Math.round(response.data.main.feels_like)
      store.weather.temp.min = Math.round(response.data.main.temp_max)
      store.weather.temp.max = Math.round(response.data.main.temp_min)
    })
    .then(() => {
      instance.get(`onecall?lat=${store.coord.lat}&lon=${store.coord.lon}&appid=83d9c12644f83eb94f3ad2d262c259e2&units=metric&lang=ru`)
        .then(response => {
          store.days.forEach((item, index) => {
            item.icon = response.data.daily[index].weather[0].icon
            item.temp.day = Math.round(response.data.daily[index].temp.day)
            item.temp.feelsLike.day = Math.round(response.data.daily[index].feels_like.day)
            item.date.day = new Date(response.data.daily[index].dt * 1000).getDay()
            item.date.current = new Date(response.data.daily[index].dt * 1000)
              .toLocaleString().split(',')[0].split('.')
          })
        })
    })
}

getWeatherInfo()

let CurrentWeather = (props) => {
  return (
    <>
      <div className={`${style.weatherBody__current}`}>
        <div className={`${style.weatherBody__title}`}>
          Текущая погода
        </div>
        <div className={`${style.weatherBody__ico}`}>
          <img src={store.weather.icon} alt="weather ico" />
        </div>
        <Divider />
        <div className={`${style.weatherItem__content}`}>
          <div className={`${style.weatherItem__contentItem}`}>
            Температура {store.weather.temp.current}°
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Ощущается как {store.weather.temp.feelsLike}°
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            {store.weather.desc}
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

  const weekDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]

  let currentDay = weekDays[props.day]

  const monthsList = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  let currentMonth = monthsList[Number(props.date[1])]

  return (
    <>
      <div className={`${style.weatherBody__daysItem}`}>
        <div className={`${style.weatherBody__title}`}>
          {currentDay}
          <br />
          {props.date[0]} {currentMonth}
        </div>
        <Divider />
        <div className={`${style.weatherItem__content}`}>
          <div className={`${style.weatherItem__contentItem}`}>
            Температура {props.dayTemp}°
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Ощущается как {props.feelsLike}°
          </div>
        </div>
      </div>
    </>
  )
}
let daysList = []
setInterval(() => {
  daysList = store.days.map((item, index) => index === 0 ? ''
    : <WeatherDay
      key={item.id} id={item.id} day={store.days[index].date.day}
      date={store.days[index].date.current} dayTemp={store.days[index].temp.day}
      feelsLike={store.days[index].temp.feelsLike.day} />)
}, 100)

let Weather = () => {
  return (
    <>
      <div className={`${style.weather}`}>
        <div className="container">

          <div className={`${style.weather__city}`}>
            Ваше местоположение: {store.currentLocation}
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