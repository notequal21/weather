import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWeatherInfoAPI } from './api/api';
import './App.css';
import EnterLocationPopup from './components/EnterLocationPopup/EnterLocationPopup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherContainer from './components/Weather/WeatherContainer';

function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const setCurrentWeatherInfo = async (location) => {
    const weatherInfo = await getWeatherInfoAPI.getCurrentWeather(location)
    if (store.currentWeather.currentLocation !== weatherInfo.name) {
      dispatch({ type: 'currentWeather/SET-WEATHER-INFO', payload: weatherInfo })
      setDaysWeatherInfo(weatherInfo.coord.lat, weatherInfo.coord.lon)
    }
  }

  const setDaysWeatherInfo = async (lat, lon) => {
    if (store.currentWeather.coord.lat !== lat) {
      const daysWeatherInfo = await getWeatherInfoAPI.getDaysWeather(lat, lon)
      dispatch({ type: 'weatherDaysOfWeek/SET-DAYS-WEATHER-INFO', payload: daysWeatherInfo.daily })
    }
  }

  return (
    <div className="wrapper">

      <Header coords={store.currentWeather.coord} setCurrentWeatherInfo={setCurrentWeatherInfo} />

      <div className='content'>

        {
          store.currentWeather.currentLocation === 'none' ? <EnterLocationPopup setCurrentWeatherInfo={setCurrentWeatherInfo} />
            : ''
        }

        <WeatherContainer />

      </div>

      <Footer />

    </div>
  );
}

export default App;
