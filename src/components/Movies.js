import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Movies(){
    const [movies, setMovies] = useState([]);    
    
    useEffect( () => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        request.then( response => {setMovies(response.data)});

    },[])
    return (
        <div className="container">
            <h2>Selecione o filme</h2>
            <ul className="listMovies">
               { movies.map( movie => 
               <li key={movie.id}> 
                    <Link to={`/movie/${movie.id}`}>
                    <img src={movie.posterURL} alt={movie.title + " poster"} /> 
                    </Link>
                </li>)} 
            </ul>
        </div>
    )
}