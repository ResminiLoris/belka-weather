import axios from 'axios';

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "0a2aedbfde093686ff4ebfd059aaaf53";

export const getWeatherData = async (cityName) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`);
        return data;
    }catch(error){
        throw error;
    }
}