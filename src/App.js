import axios from 'axios';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

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
