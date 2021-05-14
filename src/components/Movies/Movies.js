import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Movies(props){
    const { setHome } = props
    const [movies, setMovies] = useState([]);    
    setHome(true);
    useEffect( () => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

        request.then( response => {setMovies(response.data)});

    },[])
    
    return (
        <Container>
            <h2>Selecione o filme</h2>
            <ListOfMovies>
               { movies.map( movie => 
               <li key={movie.id}> 
                    <Link to={`/sessoes/${movie.id}`}>
                    <img src={movie.posterURL} alt={movie.title + " poster"} /> 
                    </Link>
                </li>)} 
            </ListOfMovies>
        </Container>
    )
}

const Container = styled.div`
    margin: 67px 24px 130px 24px;

    h2 {
        width: 100%;
        height: 110px;
        font-size: 24px;
        color:#293845;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h3 {
        display: flex;
        align-items: center;
        width: 100%;
        height: 35px;
        font-size: 24px;
        color:#293845;
    }
`
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