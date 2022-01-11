import style from "./Footer.module.scss"
import logoIco from '../../assets/icons/sun.png'

let Footer = () => {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className={`container`}>
          <div className={`${style.footerBody}`}>
            <div className={`${style.footerBody__logo}`}>
              <img src={logoIco} alt="" /> Weather App
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer