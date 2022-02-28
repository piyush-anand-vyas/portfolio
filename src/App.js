import './App.css';
import Navbar from './components/Navbar';
import RouteConfig from './utils/routes/RouteConfig';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <RouteConfig/>
      </Router>
    </div>
  );
}

export default App;
