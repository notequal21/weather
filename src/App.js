import { useSelector } from 'react-redux';
import './App.css';
import EnterLocationPopup from './components/EnterLocationPopup/EnterLocationPopup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherContainer from './components/Weather/WeatherContainer';

function App() {
  const store = useSelector(store => store)

  return (
    <div className="wrapper">

      <Header coords={store.currentWeather.coord} />

      <div className='content'>

        {
          store.currentWeather.currentLocation === 'none' ? <EnterLocationPopup />
            : ''
        }

        <WeatherContainer />

      </div>

      <Footer />

    </div>
  );
}

export default App;
