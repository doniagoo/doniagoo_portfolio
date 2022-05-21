// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
import NavBar from "./components/navbar/NavBar";
import Buscador from "./components/Buscador";
import Otros from "./components/Otros";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio}/>
          <Route path="/buscador" component={Buscador}/>
          <Route path="/otros" component={Otros}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
