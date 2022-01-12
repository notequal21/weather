import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { connect } from "react-redux"
import { requestCurrentLocation } from "../../store/reducers/currentWeatherReducer"
import store from "../../store/redux"
import Weather from "./Weather"


let WeatherContainer = (props) => {

  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const currentWeather = useSelector(store => store.currentWeather)


  let location = 'sarapul'

  const setCurrentLocation = () => {
    dispatch({ type: 'currentWeather/SET-CURRENT-LOCATION', payload: location })
  }

  useEffect(() => {
    if (store.currentWeather.currentLocation !== location) {
      setCurrentLocation()
    }
  })
  // setCurrentLocation('sarapul')

  // props.getLocation(props.currentWeather.currentLocation)

  // useEffect(() => {
  //   props.getLocation(props.currentWeather.currentLocation)
  // })

  return (
    <Weather store={store} currentWeather={currentWeather} />
  )
}

export default WeatherContainer



let mapStateToProps = (state) => {
  return {
    store: state,
    currentWeather: state.currentWeather
  }
}

// export default connect(mapStateToProps, {})(WeatherContainer)