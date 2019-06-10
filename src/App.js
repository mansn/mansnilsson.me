import React from 'react';
import me from '../src/assets/me.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="me-logo" alt="månsnilsson" />
        <h1>Måns Nilsson</h1>
      </header>
      <footer>
        <a href="mailto:willaddthis@soon.com">email</a>•
        <a href="http://twitter.com/the_mni">twitter</a>•
        <a href="http://github.com/mansn">github</a>
      </footer>
    </div>
  );
}

export default App;
