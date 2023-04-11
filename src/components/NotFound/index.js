// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? 'dark-bg' : 'light-bg'
        const headingColor = isDarkTheme ? 'dark-heading' : 'light-img'
        return (
          <div className={bgColor}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="nf-img"
              alt="not found"
            />
            <h1 className={headingColor}>Lost Your Way</h1>
            <p className="nf-about">We cannot seem to find the page</p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
