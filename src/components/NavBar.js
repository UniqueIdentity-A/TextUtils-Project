import React from 'react'              //React base component
import PropTypes from 'prop-types'// imported PropTypes
//import { Link } from 'react-router-dom'
//import Link from "react-router-dom";

export default function NavBar(props) { // Using props
  return (
    // replaced className as className
    // replaced  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> by adding />
    // replaced href="/" by href="/"
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/*setting dark mode to NavBar*/}
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
       {props.title} 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
         {/* <li className="nav-item">
            <a className="nav-link active" href="/about">
             {props.aboutText}
            </a>
         </li>*/}
        </ul>
       {/* <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>*/}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>   {/*converting as template literal */} {/*if props. mode = light  then value equal to dark other wise it will be light */}
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" style={{backgroundColor : props.mode === 'dark' ? '#4e5e76' : 'white', borderColor : props.mode === 'dark' ? '#fd5b0d00' : 'white'}}/>
          <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : "Disable Dark Mode"}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

// Types of Props

//1.  propTypes we can stick the string or number in component
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText : PropTypes.string
  }
//2. defaultProps we can default props i we do not add any title or any
NavBar.defaultProps = {
    title : 'Set Title Here',
    aboutText : 'About'
}
