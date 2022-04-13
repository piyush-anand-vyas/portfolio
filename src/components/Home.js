import React from "react";
import {GoMail} from 'react-icons/go';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaPhoneSquareAlt} from 'react-icons/fa';

export default function Home() {
  const resumeLink = "https://drive.google.com/file/d/1IoXm-WHbieZfv6wlT2qHaqcb7tWlaCA5/view?usp=sharing";
  return (
    <div className="container">
      {/* style={{position:"static", minHeigth:"10rem"}}> */}
      <div className="row py-5 text-start">
        {/* style={{marginTop: "8rem", textAlign: "start"}}> */}
        <div className="col-md-8 ms-5 pb-4">
          <h1>
            <strong>Hey,</strong>
          </h1>
          <h1>
            <strong style={{color:"#21a3a3"}}>I'm Piyush </strong>
          </h1>
          <h2>I am a Full Stack Developer</h2>
          <br />
          {/* <button
            type="button"
            class="btn btn-warning me-4"
            style={{ fontSize: "1.5rem" }}
            onClick={() => {
              history.push("/contact");
            }}
          >
            Get in Touch
          </button> */}
          <button type="button" class="btn btn-warning" style={{ fontSize: "1.5rem" }} onClick={()=>{
              window.open(resumeLink, "_blank");
          }}>
            Resume
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title"><GoMail fontSize="2em"/></h5>
              <h5 class="card-title">Email</h5>
              <p class="card-text">piyush__vyas@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div class="card">
            <div class="card-body">
            <h5 class="card-title"><AiFillLinkedin fontSize="2em"/></h5>
              <h5 class="card-title">Linkedin</h5>
              <a href="https://www.linkedin.com/in/piyush-vyas-b608731b8/" target="_blank" rel="noreferrer" class="card-text">View Profile</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div class="card">
            <div class="card-body">
            <h5 class="card-title"><FaPhoneSquareAlt fontSize="2em"/></h5>
              <h5 class="card-title">Mobile</h5>
              <p class="card-text">+91 8669163866</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
