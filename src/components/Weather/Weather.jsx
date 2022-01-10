import style from "./Weather.module.scss"

let Weather = () => {
  return (
    <>
      <div className={`${style.weather}`}>
        <div className="container">
          <div className={`${style.weatherBody}`}>
            Здесь будет показыаться погода
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather