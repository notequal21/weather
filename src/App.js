import './App.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import WeatherContainer from './components/Weather/WeatherContainer';

function App() {
  return (
    <div className="wrapper">

      {/* <Header /> */}

      <div className='content'>

        {/* <Weather /> */}
        <WeatherContainer />

      </div>

      <Footer />

    </div>
  );
}

export default App;
