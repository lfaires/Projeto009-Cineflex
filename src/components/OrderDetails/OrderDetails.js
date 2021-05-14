import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function OrderDetails(props) {
    const {seats, movie, name, cpf, setHome, resetData} = props
    const newCpf = cpf.substring(0,3) + "." + cpf.substring(3,6) + "." + cpf.substring(6,9) + "-" + cpf.substring(9,11)
    setHome(true)

    return (
        <Container>
            <Heading>Pedido feito <br/>com sucesso!</Heading>
                <Subheading>Filmes e sessão</Subheading>
                <Details>
                    <Detail>{movie.title}</Detail>
                    <Detail>{movie.date+ " " + movie.time}</Detail>
                </Details>
                <Subheading>Ingressos</Subheading>
                <Details>
                    {seats.map( seat => <Detail key={seat.id}>{"Assento " + seat.name}</Detail>)}
                </Details>
                <Subheading>Comprador</Subheading>
                <Details>
                    <Detail>{"Nome: " + name}</Detail>
                    <Detail>{"CPF: " + newCpf}</Detail>
                </Details>
                <div>
                    <Link onClick={resetData} className="button-link" to="/">Voltar para Home</Link>     
                </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 67px 24px 130px 24px;

    & :nth-child(8) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const Heading = styled.div`
    width: 100%;
    height: 110px;
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Subheading = styled.div`
    color: #293845;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
`
const Details = styled.div`
    margin-bottom: 40px;
`
const Detail = styled.div`
    font-size: 22px;
    color: #293845;
`