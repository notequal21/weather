import style from "./Footer.module.scss"

let Footer = () => {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className="container">
          <div className={`${style.footerBody}`}>
            здесь будет контактная информация
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer