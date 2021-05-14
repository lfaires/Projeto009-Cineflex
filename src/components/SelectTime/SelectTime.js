import axios from 'axios';
import styled from 'styled-components';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../Footer'

export default function SelectTime(props) {
    const { setHome, setLocation, setUrl } = props;
    const {idMovie} = useParams();
    const [movies, setMovies] = useState([]); 
    const [dates, setDates] = useState([]);
    setHome(false);
    setLocation(useHistory());
    setUrl("/")

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);

        request.then( response => {setDates(response.data.days); setMovies(response.data)});

    },[])

    return (
        <>
        <Container>
            <h2>Selecione o horário</h2>
            <TimeTable>
            { dates.map( date => 
                <li key={date.id}>
                    <h3>{date.weekday + " - " + date.date}</h3>
                    <Time>
                        {date.showtimes.map( showtime => 
                            <Link to={`/assentos/${showtime.id}`} key={showtime.id}>
                                <div key={showtime.id}>
                                    <span>{showtime.name}</span>
                                </div>
                            </Link>)}
                    </Time>
                </li>)} 
            </TimeTable>
        </Container>
        <Footer title={movies.title} posterURL={movies.posterURL} weekday={null} time={null}/>
        </>
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

const TimeTable = styled.ul``

const Time = styled.div`
    display: flex;
    margin: 22px 0;
    height: 43px;
    div {
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        background:#E8833A;
        font-size: 18px;
        height: 100%;
        width: 83px;
        margin-right: 8px;  
    }
`