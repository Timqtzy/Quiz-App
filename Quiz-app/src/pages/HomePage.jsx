
import app from './../App'
import './css/home.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MoonIcon } from '@chakra-ui/icons'

function Homepage() {

  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary" id='navbar'>
        <div className="container-fluid" id='navContent'>
          <a className="navbar-brand" href="#">Quiz</a>
          <div className="navBtn">
            <button type="button" className="btn btn-outline-primary" id='darkMode'> <MoonIcon boxSize={16}/> </button>
            <button type="button" className="btn btn-outline-primary" id='loginBtn'>Log in</button>
            <button type="button" className="btn btn-outline-secondary" id='signupBtn'>Sign up</button>
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default Homepage
