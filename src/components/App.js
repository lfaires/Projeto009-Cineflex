import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import SelectTime from './SelectTime'
import SelectSeats from './SelectSeats'
import OrderDetails from './OrderDetails'

export default function App(){
    const [seatsChoosen, setSeatsChoosen] = useState([])
    const [movieChoosen, setMovieChoosen] = useState([])
    const [buyerName, setBuyerName] = useState("")
    const [buyerCpf, setBuyerCpf] = useState("")
    const [buyerInfos, setBuyerInfos] = useState([])
    console.log(buyerInfos)
    
    return (
        <>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Movies />
                </Route>
                <Route path="/movie/:idMovie" exact>
                    <SelectTime />
                </Route>
                <Route path="/movietime/:idTime" >
                    <SelectSeats setMovieChoosen={setMovieChoosen} setSeatsChoosen={setSeatsChoosen} setName={setBuyerName} setCpf={setBuyerCpf}/>
                </Route>
                <Route path="/ordercompleted" exact>
                    <OrderDetails seats={seatsChoosen} movie={movieChoosen} />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}