import React from 'react';
import me from '../src/assets/me.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="me-logo" alt="månsnilsson" />
        <h1>Måns Nilsson</h1>
      </header>
    </div>
  );
}

export default App;
