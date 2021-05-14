import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


export default function SelectSeats(props) {
    const {setSeatsChoosen, setName, setCpf} = props
    const {idTime} = useParams()
    const [infos, setInfos] = useState("")
    const [movie, setMovie] = useState("")
    const [seats, setSeats] = useState([])
    const [day, setDay] = useState("") 
    const [nameBuyer, setNameBuyer] = useState("");
    const [cpfBuyer, setCpfBuyer] = useState("");

    useEffect( () => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idTime}/seats`);

        request.then( response => {setInfos(response.data); setMovie(response.data.movie); setSeats(response.data.seats); setDay(response.data.day) });

        },[])

        function toggleSeat(seatChoosenId, seatAvailable){
            if (seatAvailable === false){
                alert("Esse assento não está disponível")
                return;
            }
            const newSeat = seats.map( (seat) =>{
                if (seat.id === seatChoosenId){
                    seat.selected = !seat.selected;
                }
                return seat
            });
            setSeats(newSeat)
            setSeatsChoosen(newSeat.filter( item => item.selected === true))
        }

        
        
        function saveInfos() {
            if (nameBuyer !== "" || nameBuyer === isNaN){
                setName(nameBuyer)
            } else {
                alert("Insira um nome válido")
                return
            }
            if (cpfBuyer !== isNaN && cpfBuyer.length === 12){
                setCpf(cpfBuyer)
            } else {
                alert("Insira um número válido para o CPF")
                return
            }
        }

    return(
        <>
        <div className="container">
            <h2>Selecione o(s) assento(s)</h2>
            <ul className="seats">
                {seats.map( (seat) => <li key={seat.id} className={!seat.isAvailable ? "not-available" : (seat.selected ? "selected" : null)} onClick={() => toggleSeat(seat.id,seat.isAvailable)} >{seat.name}</li>)}
            </ul>
            <div className="seats-option">
                <div>
                    <div className="ball selected"></div>
                    <div className="ball-title">Selecionado</div>
                </div>
                <div>
                    <div className="ball"></div>
                    <div className="ball-title">Disponível</div>
                </div>
                <div>
                    <div className="ball not-available"></div>
                    <div className="ball-title">Indisponível</div>
                </div>
            </div>
            <form>
                <div className="personal-info"> Nome do comprador:</div>
                <input type="text" placeholder="Digite seu nome..." onChange={(e) => setNameBuyer(e.target.value)} value={nameBuyer} ></input>
                <div className="personal-info">CPF do comprador:</div>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpfBuyer(e.target.value)} value={cpfBuyer}></input>
                <div>
                    <button onClick={saveInfos}>Reservar assento(s)</button>
                </div>
            </form>
        </div>
        <footer>
            <div>
                <img src={movie.posterURL} alt={movie.title + " poster"}/>
            </div>
            <p>{movie.title} <br/> {day.weekday + " - " +infos.name}</p>
        </footer>
        </>
    )
}