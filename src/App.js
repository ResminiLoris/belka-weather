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
          <div className="icon">
            <i className="fa fa-sun"></i>
          </div>
          <h4>weather</h4>
          <div className="temprature">
            <h4>25&deg;C</h4>
          </div>
          <div className="city">
            <h4><i className="fa fa-street-view"></i>città | stato</h4>
          </div>
          <div className="temprature-range">
            <h6>Min: 25&deg;C | Max: 28&deg;C | Humidity: 10%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
