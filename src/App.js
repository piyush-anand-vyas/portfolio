import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
//import RouteConfig from './utils/routes/RouteConfig';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{paddingTop: "5rem", fontFamily: "Consolas"}}>
      {/* <Router>
        <Navbar/>
        <RouteConfig/>
      </Router> */}
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
