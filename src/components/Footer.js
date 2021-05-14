import styled from 'styled-components';

export default function Footer(props) {
    const {title, posterURL, weekday, time} = props
    
    return (
        <Footers>
            <div>
                <img src={posterURL} alt={title + " poster"}/>
            </div>
            { weekday === null ? (<p>{title}</p>) :(<p>{title} <br/> {weekday + " - " + time}</p>)}  
        </Footers>
    )
}

const Footers = styled.footer`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 117px;
    background:#DFE6ED;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #9EADBA;

    div {
        border: 1px solid rgba(0,0,0, 0.05);
        box-shadow: 0 0 10px #E5E5E5;
        border-radius: 2px;
        margin-left: 10px;
        background: #FFF;
        width: 64px;
        height: 89px;
    }

    p {
        margin-left: 14px;
        color:#293845;
        font-size: 26px;
    }

`