import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import currentWeatherReducer from "./reducers/currentWeatherReducer";
import weatherDaysOfWeekReducer from "./reducers/weatherDaysOfWeekReducer";

let rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  weatherDaysOfWeek: weatherDaysOfWeekReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store