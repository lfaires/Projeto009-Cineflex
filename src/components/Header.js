import styled from 'styled-components';

export default function Header() {
    return (
        <Headers>
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
`