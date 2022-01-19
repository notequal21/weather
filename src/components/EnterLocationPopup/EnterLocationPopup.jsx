import style from './EnterLocationPopup.module.scss'
import { Input } from 'antd';
import { getCurrentWeatherInfo } from '../../store/reducers/redux-thunk/currentWeather';
import { useDispatch } from 'react-redux';

const { Search } = Input;


let EnterLocationPopup = ({ setCurrentWeatherInfo, ...props }) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className={`${style.popup}`}>
        <div className={`${style.popup__bg}`}>
          <div className={`${style.popupBody}`}>
            <div className={`${style.popupBody__title}`}>
              Напишите название вашего города
            </div>
            <div className={`${style.popupBody__content}`}>
              <div className={`${style.popupBody__contentSearch}`}>
                <Search
                  onSearch={(value) => {
                    dispatch(getCurrentWeatherInfo(value))
                  }}
                  size="large" placeholder="Enter your city here" enterButton="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnterLocationPopup