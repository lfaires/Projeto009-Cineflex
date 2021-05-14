import styled from 'styled-components';

export default function AllSeats(props) {
    const {seats, setSeatsId, setSeatsChoosen, setSeats} = props

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
        setSeatsId(newSeat.filter( item => item.selected === true).map( item => item.id))
        setSeatsChoosen(newSeat.filter( item => item.selected === true))
    }

    return (
        <ul className="seats">
            {seats.map( (seat) => <li key={seat.id} className={!seat.isAvailable ? "not-available" : (seat.selected ? "selected" : null)} onClick={() => toggleSeat(seat.id,seat.isAvailable)} >{seat.name}</li>)}
        </ul>
    )
}

const Seats = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1 0 9.1%;
    color: #000;
    font-size: 11px;
    flex-wrap: wrap;
    margin-top: -12px;
    height: 202px;
    width: 100%;
    margin-bottom: 16px;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 9.1%;
        background:#C3CFD9;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #808F9D;
    }
`