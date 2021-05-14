import axios from 'axios'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { useParams, useHistory} from 'react-router-dom';
import Footer from './Footer'
import AllSeats from './SelectSeats/AllSeats';
import SeatsCategories from './SelectSeats/SeatsCategories';
import BuyerData from './SelectSeats/BuyerData';

export default function SelectSeats(props) {
    const {setSeatsChoosen, setMovieChoosen, setBuyerName, setBuyerCpf, setHome, setLocation, setUrl} = props
    const {idTime} = useParams()
    const [infos, setInfos] = useState("")
    const [movie, setMovie] = useState("")
    const [seats, setSeats] = useState([])
    const [seatsId, setSeatsId] = useState([])
    const [day, setDay] = useState("") 
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    setHome(false)
    setLocation(useHistory());
    setUrl(`/movie/${movie.id}`)

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idTime}/seats`);

        request.then( response => {setInfos(response.data); setMovie(response.data.movie); setSeats(response.data.seats); setDay(response.data.day) });

        },[])
  
        function saveInfos() {
            if (isNameValid() && isCpfValid()){
                setBuyerName(name)
                setBuyerCpf(cpf)
                const movieInfos = {title: movie.title, date: day.date, time: infos.name}    
                setMovieChoosen(movieInfos)
                sendBuyerData()
            } else {
                alert("Insira valores válidos")
            }
        }

        function isCpfValid(){
            return (cpf !== "" && (cpf !== isNaN && cpf.length === 11))
        }

        function isNameValid() {
            return (name !== "" || name === isNaN)
        }

        function sendBuyerData() {
            const buyerdata = {
                ids: seatsId,
                name: name,
                cpf: cpf
            }

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", buyerdata)

            promise.then( response => console.log(response))
        }

    return(
        <>
        <Container>
            <h2>Selecione o(s) assento(s)</h2>
            <AllSeats seats={seats} setSeatsId={setSeatsId} setSeatsChoosen={setSeatsChoosen} setSeats={setSeats}></AllSeats>
            <SeatsCategories></SeatsCategories>
            <BuyerData setName={setName} name={name} setCpf={setCpf} saveData={saveInfos}></BuyerData>
        </Container>
        <Footer title={movie.title} posterURL={movie.posterURL} weekday={day.weekday} time={infos.name}/>
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