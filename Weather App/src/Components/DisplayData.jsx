export default function DisplayData({weatherData}){
    let IMAGE;

    if(weatherData.weather === 'Clear' || weatherData.weather === 'Haze'){
        IMAGE = 'images/clear.png'
    }
    else if(weatherData.weather === 'Clouds'){
        IMAGE = 'images/cloud.png'
    }
    else if(weatherData.weather === 'Mist'){
        IMAGE = 'images/mist.png'
    }
    else if(weatherData.weather === 'Rain'){
        IMAGE = 'images/rain.png'
    }
    else if(weatherData.weather === 'Snow'){
        IMAGE = 'images/snow.png'
    }
    else{
        IMAGE = 'images/404.png'
    }

    return (
    <>
        <div className="displayInfo">
            <img src={IMAGE} style={{
                height : !weatherData.success ? '80%' : '50%', 
                marginTop : !weatherData.success ? '0.20rem' : '0rem',
            }}/>
            <div className="info">
                {weatherData.success && <h1>{weatherData.temp}<sup>&deg;C</sup></h1>}
                <h2>{weatherData.description}</h2>
            </div>
        </div>

        {weatherData.success && (
            <div className="displayDetails">
                <div className="humidity">
                    <i className="ri-water-percent-line"></i>
                    <div className="info">
                        <h1>{weatherData.humidity + '%'}</h1>
                        <h2>Humidity</h2>
                    </div>  
                </div>
                <div className="windSpeed">
                    <i className="ri-windy-fill"></i>
                    <div className="info">
                        <h1>{weatherData.windspeed + 'Km/h'}</h1>
                        <h2>Wind Speed</h2>
                    </div>
                </div>
            </div>            
        )}
    </>
    )
}