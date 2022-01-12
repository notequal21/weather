import { connect } from "react-redux"
import Weather from "./Weather"

let WeatherContainer = (props) => {
  return (
    <Weather currentWeather={props.currentWeather} />
  )
}

let mapStateToProps = (state) => {
  return {
    currentWeather: state.currentWeather
  }
}

export default connect(mapStateToProps)(WeatherContainer)