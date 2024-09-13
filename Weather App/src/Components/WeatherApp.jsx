import "./WeatherApp.css"
import Searchbar from "./Searchbar"
import DisplayData from "./DisplayData"
import { useState } from "react"

export default function WeatherApp(){

    const [location , setLocation] = useState('');
    const [weatherData , setWeatherData] = useState(
    {
        isClicked : false , 
        success : false , 
        weather : '' , 
        description : '' ,  
        temp : '' , 
        humidity : '' , 
        windspeed : ''
    })

    async function fetchWeatherData(){
        
        if(location === ''){
            return
        }

        const API_Key = 'b8479c133d4fcd9aedc09b77df1d14b7';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_Key}`;

        try {
            const response = await fetch(URL);

            if(!response.ok){
                throw new Error('Error Fetching Data');
                
            }
            const data = await response.json();
            
            setWeatherData((prevData) => {
                return {...prevData ,
                    isClicked : true,
                    success : true, 
                    weather : data.weather[0].main,
                    description : data.weather[0].description,
                    temp : Math.floor(data.main.temp),
                    humidity : data.main.humidity,
                    windspeed : Math.floor(data.wind.speed)
                }
            })

        } catch (error) {
            console.log(error.message)

            setWeatherData((prevData) => {
                return {...prevData , 
                    isClicked : true,
                    success : false,
                    weather : '',
                    description : 'Error! Location Not Found',
                    temp : '',
                    humidity :'',
                    windspeed : ''
                }
            })
        }

    }

    return (
    <div className="container"> 
        <Searchbar location={location} setLocation={setLocation} fetchWeatherData={fetchWeatherData}/>
        
        {weatherData.isClicked && <DisplayData weatherData={weatherData}/>}
    </div>
    )
}