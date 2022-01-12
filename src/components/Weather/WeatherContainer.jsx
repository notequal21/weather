import { connect } from "react-redux"
import Weather from "./Weather"

let WeatherContainer = (props) => {
  return (
    <Weather store={props.store} currentWeather={props.currentWeather} />
  )
}

let mapStateToProps = (state) => {
  return {
    store: state,
    currentWeather: state.currentWeather
  }
}

export default connect(mapStateToProps)(WeatherContainer)