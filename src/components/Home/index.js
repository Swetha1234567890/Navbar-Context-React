// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return isDarkTheme ? (
          <div className="home-dark-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              className="home-img1"
              alt="home"
            />
            <h1 className="home1">Home</h1>
          </div>
        ) : (
          <div className="home-light-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="home-img2"
              alt="home"
            />
            <h1 className="home2">Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
