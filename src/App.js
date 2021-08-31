import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:user"  component={Card}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
