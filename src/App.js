import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">Leaniverse</h1>
        </div>
        <div className="navbar-right">
          <button className="button">Login</button>
          <button className="button">Sign Up</button>
        </div>
      </nav>
      {/* Rest of your application */}
    </div>
  );
}

export default App;
