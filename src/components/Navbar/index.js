// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickDarkTheme = () => {
        toggleTheme()
      }

      const onClickLightTheme = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="nav-dark-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            className="dark-logo"
            alt="website logo"
          />
          <ul className="middle-container">
            <Link to="/">
              <li className="home-header1">Home</li>
            </Link>
            <Link to="/about">
              <li className="about-header1">About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="theme-btn"
            type="button"
            onClick={onClickLightTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </div>
      ) : (
        <div className="nav-light-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            className="dark-logo"
            alt="website logo"
          />
          <ul className="middle-container">
            <Link to="/">
              <li className="home-header2">Home</li>
            </Link>
            <Link to="/about">
              <li className="about-header2">About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="theme-btn"
            type="button"
            onClick={onClickDarkTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
