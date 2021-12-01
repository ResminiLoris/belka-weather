import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>titolo</h2>
        <div className="search">
          <input type="text" placeholder="Scegli una città!" />
          <button type="button">Cerca</button>
        </div>
        <div className="main-container">
          <h3>titolo secondario</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
