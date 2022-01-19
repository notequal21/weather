import { getWeatherInfoAPI } from "../../../api/api"
import { setDaysWeatherInfoAction } from "../weatherDaysOfWeekReducer"

export const getDaysWeatherInfo = (lat, lon) => async (dispatch) => {
  const daysWeatherInfo = await getWeatherInfoAPI.getDaysWeather(lat, lon)
  dispatch(setDaysWeatherInfoAction(daysWeatherInfo.daily))
}