import { Divider } from "antd"
import style from "./Weather.module.scss"

let Weather = () => {
  return (
    <>
      <div className={`${style.weather}`}>
        <div className="container">
          <div className={`${style.weather__city}`}>
            Your current location: Moscow
          </div>
          <Divider />
          <div className={`${style.weatherBody}`}>
            <div className={`${style.weatherBody__current}`}>
              <div className={`${style.weatherBody__title}`}>
                Current weather
              </div>
              <Divider />
            </div>
            <div className={`${style.weatherBody__days}`}>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Tuesday
                </div>
                <Divider />
              </div>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Wednesday
                </div>
                <Divider />
              </div>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Thursday
                </div>
                <Divider />
              </div>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Friday
                </div>
                <Divider />
              </div>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Saturday
                </div>
                <Divider />
              </div>
              <div className={`${style.weatherBody__daysItem}`}>
                <div className={`${style.weatherBody__title}`}>
                  Sunday
                </div>
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather