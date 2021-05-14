import styled from 'styled-components';

export default function SeatsCategories() {
    const categories = [
        {id:1, title: "Selecionado", seat: "selected"},
        {id:2, title: "Disponível", seat: ""},
        {id:3, title: "Indisponível", seat: "not-available"}
    ]
    
    return (
        <Categories>
            {categories.map( item => 
                <Category key={item.id}>
                    <Ball seat={item.seat}></Ball>
                    <Title>{item.title}</Title>
                </Category>
            )}
        </Categories>
    )
} 

const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 76.3vw;
    height: 54px;
    margin: 0 auto;
    margin-bottom: 42px;
`
const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    font-size: 13px;
    color:#4E5A65;
`
const Ball = styled.div`
    background: ${props => (props.seat === "" ? "#C3CFD9" :(props.seat === "selected" ? "#8DD7CF" : "#FBE192"))};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-bottom: 5px;
    border: 1px solid ${props => (props.seat === "" ? "#808F9D" :(props.seat === "selected" ? "#45BDB0" : "#F7C52B"))};
`