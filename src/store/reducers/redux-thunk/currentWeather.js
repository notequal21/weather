import { getWeatherInfoAPI } from "../../../api/api"
import { setWeatherInfoAction } from "../currentWeatherReducer"
import { getDaysWeatherInfo } from "./weatherDays"

export const getCurrentWeatherInfo = (location) => async (dispatch) => {
  const weatherInfo = await getWeatherInfoAPI.getCurrentWeather(location)
  dispatch(setWeatherInfoAction(weatherInfo))
  dispatch(getDaysWeatherInfo(weatherInfo.coord.lat, weatherInfo.coord.lon))
}