import React from "react";

export default function About() {
    const skills1 = ['HTML', 'CSS', 'JavaScript', 'React'];
    const skills2 = ['Node.js','MYSQL','MongoDB','Oracle'];
    const skills3 = ['Bootstarap','MaterialUI', 'Express','Core Java']
  return (
    <div className="container my-5">
      <div className="row text-start">
        <div className="col-md-8">
          <h2 className="mb-4">About</h2>
          {/* <div className="card shadow p-3 mb-5 bg-body rounded"> */}
            {/* <div className="card-body"> */}
              <p>Hello, My name is Piyush Vyas. I am a Computer Engineer from Pune, Maharashtra, India. Currently, I am employed with RBL Bank as a Manager - Technology and Solutions.</p>
              <p>I love working on technologies including Web Development and Cloud Computing. My goal is to build applications that solve real-world problems and provide users with an amazing experience.</p>
              <p>Outside of work I like to spend my time playing cricket, swimming and travelling.</p>
            {/* </div> */}
          {/* </div> */}
          <h2 className="mt-5"> Tech Skills</h2>
          <div className="container mt-4">
          
          
                <div className="row">
                    <div className="col-md-4">
                    <ul>{
                skills1.length >0 &&
                skills1.map((skill) =>(
                    <>
                    <li>{skill}</li>
                    </>
                ) )}
            </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>{
                skills2.length >0 &&
                skills2.map((skill) =>(
                    <>
                    <li>{skill}</li>
                    </>
                ) )}
            </ul>
                    </div>
                    <div className="col-md-4">
                    <ul>{
                skills3.length >0 &&
                skills3.map((skill) =>(
                    <>
                    <li>{skill}</li>
                    </>
                ) )}
            </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 mt-5 text-center">
            <img src="photo.jpg" alt="Profile Photo" heigth="200" width="300"/>
        </div>
      </div>
    </div>
  );
}
