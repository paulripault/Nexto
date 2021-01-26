import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
