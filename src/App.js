import React, {useState, useEffect} from 'react';
import './App.css';
import {getWeatherData} from './data/weatherapi';
import {ScaleLoader} from 'react-spinners';

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Milan');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
      setLoading(true);
      const data = await getWeatherData(city);
        setWeatherData(data);
      console.log(data);
      setLoading(false);
    }catch(error){
      console.log(error.message);
      setLoading(false);
    }
  }

  const override = `
  display : block;
  margin: 0 auto;
  border-color: red;
  `;

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>titolo</h2>
        <div className="search">
          <input type="text" value = {city} onChange={(e) => setCity(e.target.value)} placeholder="Scegli una città!" />
          <button type="button" onClick={() => getData()}>Cerca</button>
        </div>
        {loading ? (
          <div className="loader-container">
            <ScaleLoader 
              css={override}
              size={200}
              color = {"#fff"}
              loading = {loading}
            />
          </div>
          
        ) : (
          <>
            {weatherdata !== null ? (
            <div className="main-container">
              <h3>titolo secondario</h3>
              <div className="icon">
                <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="img-icon" />
              </div>
              <h4>{weatherdata.weather[0].main}</h4>
              <div className="temprature">
                <h4>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h4>
              </div>
              <div className="city">
                <h4><i className="fa fa-street-view"></i> {weatherdata.name} | {weatherdata.sys.country}</h4>
              </div>
              <div className="temprature-range">
                <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
                | Max: {parseFloat(weatherdata.main.temp_max  - 273.15).toFixed(1)}&deg;C 
                | Humidity: {weatherdata.main.humidity}%</h6>
              </div>
            </div>
            ) : null}
          </>
        ) }
      </div>
    </div>
  );
}

export default App;
