import React, {useState, useEffect} from 'react';
import './App.css';
import {getWeatherData} from './data/weatherapi';

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Milan');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
      const data = await getWeatherData(city)
      console.log(data);
    }catch(error){
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>titolo</h2>
        <div className="search">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Scegli una città!" />
          <button type="button" onClick={() => getData()}>Cerca</button>
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
