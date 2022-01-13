import { Divider } from "antd"
import style from "./Weather.module.scss"

let CurrentWeather = ({ store }, ...props) => {

  console.log(store);

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

// let WeatherDay = ({ store }, ...props) => {

//   const weekDays = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
//   ]

//   let currentDay = weekDays[props.day]

//   const monthsList = [
//     'Января',
//     'Февраля',
//     'Марта',
//     'Апреля',
//     'Мая',
//     'Июня',
//     'Июля',
//     'Августа',
//     'Сентября',
//     'Ноября',
//     'Декабря',
//   ];

//   let currentMonth = monthsList[Number(props.date[1])]

//   return (
//     <>
//       <div className={`${style.weatherBody__daysItem}`}>
//         <div className={`${style.weatherBody__title}`}>
//           {currentDay}
//           <br />
//           {props.date[0]} {currentMonth}
//         </div>
//         <Divider />
//         <div className={`${style.weatherItem__content}`}>
//           <div className={`${style.weatherItem__contentItem}`}>
//             <img src={props.iconURL} alt="weather icon" />
//           </div>
//           <div className={`${style.weatherItem__contentItem}`}>
//             Температура {props.dayTemp}°
//           </div>
//           <div className={`${style.weatherItem__contentItem}`}>
//             Ощущается как {props.feelsLike}°
//           </div>
//           <div className={`${style.weatherItem__contentItem}`}>
//             {props.desc}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

let Weather = ({ store, currentWeather }, ...props) => {

  // getWeatherInfo(store)

  let daysList = []
  // setInterval(() => {
  //   daysList = store.days.map((item, index) => index === 0 ? ''
  //     : <WeatherDay
  //       key={item.id} id={item.id} iconURL={store.days[index].iconURL}
  //       day={store.days[index].date.day} desc={store.days[index].desc}
  //       date={store.days[index].date.current} dayTemp={store.days[index].temp.day}
  //       feelsLike={store.days[index].temp.feelsLike.day} />)
  // }, 100)

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

              {/* {daysList} */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Weather