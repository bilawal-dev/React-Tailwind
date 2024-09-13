export default function Searchbar({location , setLocation , fetchWeatherData}){
    return (
    <div className="searchbox">
        <i className="ri-map-pin-2-fill"></i>
        <input type="text" id="city" name="city" value={location} onChange={(event) => {setLocation(event.target.value)}}/>
        <i className="ri-search-line" id="search" onClick={() => {fetchWeatherData()}}></i>
    </div>
    )
}