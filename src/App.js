import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import CreatePost from './components/pages/CreatePost.js';
import DetailledArticle from './components/pages/detailledArticle.js';
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={News} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/about' component={About} />

            <Route path="/createpost" component={CreatePost} />
            <Route path="/detailledArticle" component={DetailledArticle}></Route>
          </Switch>
        </Router>
      </div >
    </BrowserRouter>
  );
}

export default App;