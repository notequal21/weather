import { useSelector } from "react-redux"
import Weather from "./Weather"


let WeatherContainer = (props) => {

  const store = useSelector(store => store)
  const currentWeather = useSelector(store => store.currentWeather)

  return (
    <>
      <Weather days={store.weatherDaysOfWeek.days} currentWeather={currentWeather} />
    </>
  )
}

export default WeatherContainer