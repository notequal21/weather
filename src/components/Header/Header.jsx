import style from "./Header.module.scss"
import { Input } from 'antd';
import logoIco from '../../assets/icons/sun.png'
import { getCurrentWeatherInfo } from "../../store/reducers/redux-thunk/currentWeather";
import { useDispatch } from "react-redux";

const { Search } = Input;

let Header = ({ setCurrentWeatherInfo, setDaysWeatherInfo, coords, ...props }) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={`${style.header}`}>
        <div className={`container`}>
          <div className={`${style.headerBody}`}>
            <div className={`${style.headerBody__logo}`}>
              <img src={logoIco} alt="" /> Weather App
            </div>
            <div className={`${style.headerbody__search}`}>
              <Search
                onSearch={(value) => {
                  dispatch(getCurrentWeatherInfo(value))
                }}
                size="large" placeholder="Enter your city here" enterButton="Search" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header