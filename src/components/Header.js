import styled from 'styled-components';

export default function Header(props) {
    const { home, goBack, url } = props

    function backPage() {
        goBack.push(url)
    }

    return (
        <Headers>
            { home ? null : (<button onClick={backPage}>Voltar</button>)}
            <h1>CINEFLEX</h1>
        </Headers>
    )
}

const Headers = styled.header`
    background: #C3CFD9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 34px ;
        color: #E8833A;
    }

    button{
        font-size: 15px;
        font-weight: 700;
        position: absolute;
        border-radius: 10px;
        top: 5px;
        left: 5px;
        z-index: 2;
        background: #E8833A;
        color: #C3CFD9;
        width: auto;
        padding: 10px;
        margin-top: 7px;
    }
`