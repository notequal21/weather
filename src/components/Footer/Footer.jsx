import style from "./Footer.module.scss"
import logoIco from '../../assets/icons/sun.png'
import telegramIco from '../../assets/icons/telegram.png'
import githubIco from '../../assets/icons/github.png'
import resumeIco from '../../assets/icons/resume.png'

let Footer = () => {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className={`container`}>
          <div className={`${style.footerBody}`}>
            <div className={`${style.footerBody__logo}`}>
              <img src={logoIco} alt="" /> Weather App
            </div>
            <div className={`${style.footerBody__socials}`}>
              <div className={`${style.footerBody__socialsItem}`}>
                <a target={`_blank`} href="https://t.me/notequal21">
                  <img src={telegramIco} alt="" />
                </a>
              </div>
              <div className={`${style.footerBody__socialsItem}`}>
                <a target={`_blank`} href="https://github.com/notequal21">
                  <img src={githubIco} alt="" />
                </a>
              </div>
              <div className={`${style.footerBody__socialsItem}`}>
                <a target={`_blank`} href="https://notequal.notion.site/5563732749bd4087ba5441b23f684a08">
                  <img src={resumeIco} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer