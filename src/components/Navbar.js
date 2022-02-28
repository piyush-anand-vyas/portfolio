import React from 'react';
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
  return(
    <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"#21a3a3", fontSize:"large", fontWeight:"bold"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><i>Piyush Vyas </i></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="justify-content-between"> */}
      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/experience">Experience</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/interests">Interests</Link>
          </li> */}
        </ul>
        {/* </div> */}
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
      </div>
    {/* </div> */}
  </nav>
  );
}
