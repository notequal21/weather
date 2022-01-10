import axios from 'axios';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

// const instance = axios.create({
//   baseURL: 'https://api.weather.yandex.ru/v2/',
//   headers: {
//     "X-Yandex-API-Key": "5fdddb08-8532-4cb9-915f-0d317f21475c",
//   }
// })

// instance.get('informers?lat=55.75396&lon=37.620393')
//   .then(response => {
//     console.log(response);
//   })

function App() {
  return (
    <div className="wrapper">

      <Header />

      <div className='content'>

        <Weather />

      </div>

      <Footer />

    </div>
  );
}

export default App;
