import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux"
import { getWeatherInfoAPI } from "../../api/api"
import { requestCurrentLocation } from "../../store/reducers/currentWeatherReducer"
import store from "../../store/redux"
import Weather from "./Weather"


let WeatherContainer = (props) => {

  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const currentWeather = useSelector(store => store.currentWeather)
  // const [location, changeLocation] = useState('sarapul')

  useEffect(() => {
    // setCurrentWeatherInfo('moscow')
  })

  return (
    <>
      <Weather store={store} currentWeather={currentWeather} />
    </>
  )
}

export default WeatherContainer



// let mapStateToProps = (state) => {
//   return {
//     store: state,
//     currentWeather: state.currentWeather
//   }
// }

// export default connect(mapStateToProps, {})(WeatherContainer)