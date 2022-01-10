import style from "./Header.module.scss"
import { Input } from 'antd';

const { Search } = Input;

let Header = () => {
  return (
    <>
      <div className={`${style.header}`}>
        <div className={`container`}>
          <div className={`${style.headerBody}`}>
            <div className={`${style.headerBody__logo}`}>
              Weather App
            </div>
            <div className={`${style.headerbody__search}`}>
              <Search
                onSearch={(value) => {
                  console.log(value)
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