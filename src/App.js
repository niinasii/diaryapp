import React from 'react';
import './App.css';
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Oppimispäiväkirja</h1>
      </header>
      <nav>
        <Navigation />
      </nav>
      <main>
        <switch>
          
        </switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
