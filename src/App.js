// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Projects from "./components/Projects";
import NavBar from "./components/navbar/NavBar";
import SolveApp from "./components/SolveApp";
import GadiGames from "./components/GadiGames";
import styles from './index.css';
// import styles2 from './components/timeline.css';
function setColor(color) {
  document.documentElement.style.setProperty('--color-logo', color)
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" onClick={() => setColor('orange')} exact component={Inicio}/>
          <Route path="/about"  onClick={() => setColor('red')} component={About}/>
          <Route path="/timeline" component={TimeLine}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/solve_app" component={SolveApp}/>
          <Route path="/gadi_games" component={GadiGames}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
