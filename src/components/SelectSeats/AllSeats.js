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
        <Seats>
            {seats.map( (seat) => 
                <Seat key={seat.id} selected={!seat.isAvailable ? "not-available" : (seat.selected ? "selected" : null)} onClick={() => toggleSeat(seat.id,seat.isAvailable)} >
                    {seat.name}
                </Seat>)}
        </Seats>
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
`
const Seat = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 9.1%;
    background:${props => props.selected === null ? "#C3CFD9" : (props.selected === "selected" ? "#8DD7CF" : "#FBE192")};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid ${props => props.selected === null ? "#808F9D" : (props.selected === "selected" ? "#45BDB0" : "#F7C52B")};
`
