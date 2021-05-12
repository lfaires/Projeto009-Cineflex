import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelectTime() {
    const {idMovie} = useParams()
    const [dates, setDates] = useState([]);

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);

        request.then( response => {setDates(response.data.days)});

    },[])

    return (
        <>
            <div className="container">
                <h2>Selecione o horário</h2>
                <ul className="timeTable">
                { dates.map( date => 
                    <li key={date.id}>
                        <h3>{date.weekday + " - " + date.date}</h3>
                        <div className="time">
                            {date.showtimes.map( showtime => 
                                <div key={showtime.id}>{showtime.name}</div>)}
                        </div>
                    </li>
                    )} 
                </ul>
            </div>
            <footer>

            </footer>
        </>
    )
}