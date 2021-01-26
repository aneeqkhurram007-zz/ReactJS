import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>

    </div>
  );
}

export default App;
