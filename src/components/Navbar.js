import React from "react";
import PropTypes from "prop-types"; //impt
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  //navbar is child component           //rfc for the formate of components
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div
        className="container-fluid"
        style={{
          backgroundColor: props.mode === "light" ?"" :"",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-a active" aria-current="page" href="/about">
              Home
            </a> */}
            {/* <a className="nav-link" href="/about">
              {props.about}
            </a> */}
            <a className="nav-link" href="/text">
              {props.tittle}
            </a>
            {/* <a className="nav-a disabled" href="/">
              Disabled
            </a> */}
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode1}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={props.toggleMode}
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label light"
            htmlFor="flexSwitchCheckDefault"
          >
            Enable {props.mode === "light" ? "dark" : "light"} Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototypes = {
  tittle: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.prototypes = {
  tittle: PropTypes.booloisRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = { tittle: "it is tittle", about: "it is about" };
