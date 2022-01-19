import style from './EnterLocationPopup.module.scss'
import { Input } from 'antd';

const { Search } = Input;

let EnterLocationPopup = ({ setCurrentWeatherInfo, ...props }) => {
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
                    setCurrentWeatherInfo(value)
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