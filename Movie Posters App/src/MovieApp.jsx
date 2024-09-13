import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieApp(){

    const [searchMovie , setSearchMovie] = useState('')
    const [movies , setMovies] = useState([])

    function searchMovieInput(event){
        setSearchMovie(event.target.value)
    }

    async function fetchData(movieTitle){
        const API_URL = 'http://www.omdbapi.com/?'
        const API_KEY = '&apikey=ab8f96d8'
        const URL = API_URL + 's=' + movieTitle + API_KEY

        try {
            const response = await fetch(URL)

            if(!response.ok){
                throw new Error
            }
            const data = await response.json()
            //Checking Because The Data May Be Of 'undefined' Type On Certain Search Inputs, So Ensuring Error Handling , In That Case We'll Set It To Empty Array Back Because 'map' Function Below Can't Run On 'undefined' Therefore Will Give An Error : 
            if(data.Search){
                setMovies(data.Search)
            }
            else{
                setMovies([])
            }

        } catch (error) {
            console.log('Error Fetching Data')
        }
    }

    useEffect(() => {
        fetchData('Batman')
    } , [])

    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center gap-12 py-16 px-20 max-sm:px-10">
            <h1 className="text-white text-5xl max-sm:text-4xl font-bold font-mono">Movie-Land</h1>

            <div className="border w-2/3 max-lg:w-[100%] h-14 rounded-full px-10 max-sm:px-5 flex justify-between items-center text-lg mb-20">
                <input type="text" placeholder="Enter Movie Name" name="movieTitle" value={searchMovie} onChange={searchMovieInput} className="border-none outline-none bg-transparent text-white w-[90%]"/>
                <i className="ri-search-line text-white text-2xl cursor-pointer" onClick={() => {fetchData(searchMovie)}}></i>
            </div>
            
            <div className="flex justify-center gap-10 flex-wrap">
                {movies.map((movie , index) => {
                    return <MovieCard key={index} image={movie.Poster} type={movie.Type} title={movie.Title} year={movie.Year}/>
                })}
            </div>
        </div>
    )
}