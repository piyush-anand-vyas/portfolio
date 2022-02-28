import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import About from '../../components/About';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Home from '../../components/Home';
import Interests from '../../components/Interests';
import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects';

export default function RouteConfig() {
  return (<div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
  </div>);
}
