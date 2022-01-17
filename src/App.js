import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWeatherInfoAPI } from './api/api';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherContainer from './components/Weather/WeatherContainer';
import store from './store/redux';

function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const setCurrentWeatherInfo = async (location) => {
    const weatherInfo = await getWeatherInfoAPI.getCurrentWeather(location)
    if (store.currentWeather.currentLocation !== weatherInfo.name) {
      dispatch({ type: 'currentWeather/SET-WEATHER-INFO', payload: weatherInfo })
    }
  }

  return (
    <div className="wrapper">

      <Header setCurrentWeatherInfo={setCurrentWeatherInfo} />

      <div className='content'>

        {/* <Weather /> */}
        <WeatherContainer />

      </div>

      <Footer />

    </div>
  );
}

export default App;
