import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Lomake from './components/Lomake';
import Etusivu from './components/Etusivu';
import AiheetBox from './components/AiheetBox';

function App() {
  return (
    <Router>
    <div className="container">
      <header>
        <h1>Oppimispäiväkirja</h1>
      </header>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Switch>
        <Route path="/" exact component={Etusivu} />
        <Route path="/topics" exact component={AiheetBox} />
        <Route path="/add" exact component={Lomake} />
        </Switch>
      </main>
      <footer></footer>
    </div>
    </Router>
  );
}

export default App;
