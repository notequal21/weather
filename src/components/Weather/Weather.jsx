import { Divider } from "antd"
import style from "./Weather.module.scss"

let CurrentWeather = ({ store }, ...props) => {

  return (
    <>
      <div className={`${style.weatherBody__current}`}>
        <div className={`${style.weatherBody__title}`}>
          Текущая погода
        </div>
        <div className={`${style.weatherBody__ico}`}>
          <img src={`https://openweathermap.org/img/wn/${store.weather.iconID}@2x.png`} alt="weather ico" />
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

  let date = new Date(props.date * 1000)
  // console.log(date.getDate());

  const weekDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]

  let currentDay = weekDays[date.getDay()]

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

  let currentMonth = monthsList[date.getMonth()]

  return (
    <>
      <div className={`${style.weatherBody__daysItem}`}>
        <div className={`${style.weatherBody__title}`}>
          {currentDay}
          <br />
          {date.getDate()} {currentMonth}
        </div>
        <Divider />
        <div className={`${style.weatherItem__content}`}>
          <div className={`${style.weatherItem__contentItem}`}>
            <img src={`https://openweathermap.org/img/wn/${props.iconID}@2x.png`} alt="weather icon" />
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Температура {props.dayTemp}°
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            Ощущается как {props.feelsLike}°
          </div>
          <div className={`${style.weatherItem__contentItem}`}>
            {props.desc}
          </div>
        </div>
      </div>
    </>
  )
}


let Weather = ({ store, days, currentWeather, setCurrentWeatherInfo }, ...props) => {

  let daysList = []
  daysList = days.map((item, index) => index === 0 ? ''
    : <WeatherDay
      key={item.dt} id={index} iconID={item.weather[0].icon}
      dayTemp={item.temp.day} feelsLike={item.feels_like.day}
      desc={item.weather[0].description} date={item.dt}
    />)

  return (
    <>
      <div className={`${style.weather}`}>
        <div className="container">

          <div className={`${style.weather__city}`}>
            Ваше местоположение: {currentWeather.currentLocation}
          </div>
          <Divider />
          <div className={`${style.weatherBody}`}>

            <CurrentWeather store={currentWeather} />

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