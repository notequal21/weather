import { combineReducers, createStore } from "redux";
import currentWeatherReducer from "./reducers/currentWeatherReducer";
import weatherDaysOfWeekReducer from "./reducers/weatherDaysOfWeekReducer";

let rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  weatherDaysOfWeek: weatherDaysOfWeekReducer
})

const store = createStore(rootReducer)

export default store