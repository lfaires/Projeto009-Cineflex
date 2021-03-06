import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function BuyerData(props) {
    const { setName, name, setCpf, cpf , saveData, valid, idTime} = props
    
    return (
        <Form>
            <Title>Nome do comprador:</Title>
            <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} ></input>
            <Title>CPF do comprador:</Title>
            <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf}></input>
            <div>
                <Link onClick={saveData} className="button-link" to={valid ? "/sucesso" : `/assentos/${idTime}`}>
                    Reservar assento(s)
                </Link>
            </div>
        </Form>
    )
}

const Form = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 259px;
    font-size: 18px;

    input {
        width: 87.2vw;
        height: 51px;
        margin-bottom: 10px;
    }

    & :last-child{
        display: flex;
        align-items: center;
        justify-content: center;

    }
`
const Title = styled.div`
    color:#293845;
`