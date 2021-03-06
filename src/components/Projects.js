import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Eccounting App",
      technologies: "MongoDB - Express - React - Node.js",
      details: "A cloud based book-keeping app to keep track of money sent/received from multiple users.",
      github: "https://github.com/piyush-anand-vyas/book-keeping-app-backend.git",
      netlify: "https://eccounting-app.netlify.app/",
    },
    {
      name: "Notes Managing App",
      technologies: "MongoDB - Express - React - Node.js",
      details: "A cloud based notes managing app for user specific notes.",
      github: "https://github.com/piyush-anand-vyas/iNotebook-backend.git",
      netlify: "https://notes-managing-app.netlify.app/",
    },
    {
      name: "Money Manager App",
      technologies: "MongoDB - Express - React - Node.js",
      details: "View your income and expenses under one application",
      github: "https://github.com/piyush-anand-vyas/money-manager-backend.git",
      netlify: "https://manage-money-app.netlify.app/",
    },
    {
      name: "Express Cart App",
      technologies: "MongoDB - Express - React - Node.js",
      details: "E-commerce application for online shopping",
      github: "https://github.com/piyush-anand-vyas/express-cart-backend.git",
      netlify: "https://express-cart.netlify.app/",
    }
  ];
  return (
    <div id="projects" className="container text-start" style={{paddingTop: "5rem"}}>
      <h1>Projects</h1>
      <div className="row my-4">
        {projects.length > 0 &&
          projects.map((project) => (
            <>
              <div className="col-md-6">
                <div className="card shadow p-3 mb-5 bg-body rounded">
                  <div className="card-body">
                    <h5 class="card-title">{project.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{project.technologies}</h6>
                    <p class="card-text">{project.details}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => {
                          window.open(project.github, "_blank");
                        }}
                      >
                        View Code
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => {
                          window.open(project.netlify, "_blank");
                        }}
                      >
                        View App
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
