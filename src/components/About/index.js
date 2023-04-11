// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme ? (
          <div className="about-dark-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              className="about-img1"
              alt="about"
            />
            <h1 className="about1">About</h1>
          </div>
        ) : (
          <div className="about-light-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              className="about-img2"
              alt="about"
            />
            <h1 className="about2">About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
