import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Features from './components/informations/Features';
import Confidentiality from './components/informations/Confidentiality';
import About from './components/informations/About';
import Contact from './components/informations/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
      <Navbar />
        <Switch>
          <Route exact path="/" component ={ Homepage }/>
          <Route exact path="/features" component ={ Features }/>
          <Route exact path="/confidentiality" component ={ Confidentiality }/>
          <Route exact path="/contact" component ={ Contact }/>
          <Route exact path="/about" component ={ About }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
