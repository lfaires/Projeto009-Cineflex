import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
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
            <ListOfMovies>
               { movies.map( movie => 
               <li key={movie.id}> 
                    <Link to={`/movie/${movie.id}`}>
                    <img src={movie.posterURL} alt={movie.title + " poster"} /> 
                    </Link>
                </li>)} 
            </ListOfMovies>
        </div>
    )
}

const ListOfMovies = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
        height: 193px;
        width: 38.7vw;
        margin-bottom: 11px;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0, 0.05);
        box-shadow: 0 0 10px #E5E5E5;
    }
`