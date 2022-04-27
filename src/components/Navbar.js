import React from 'react';

export default function Navbar() {
  return(
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top" style={{backgroundColor:"#21a3a3", fontSize:"large", fontWeight:"bold"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#home"><i>Piyush Vyas </i></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="justify-content-between"> */}
      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#experience">Experience</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/interests">Interests</a>
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
