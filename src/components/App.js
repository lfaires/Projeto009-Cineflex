import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import SelectTime from './SelectTime'
import SelectSeats from './SelectSeats'

export default function App(){
    const [seatsChoosen, setSeatsChoosen] = useState({})
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const buyerInfos = {name: name, cpf: cpf}
    
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
                    <SelectSeats setSeatsChoosen={setSeatsChoosen} setName={setName} setCpf={setCpf}/>
                </Route>
                {/*<Route path="/ordercompleted" exact>
                    <Tickets seatsChoosen={seatsChoosen} />
                </Route>*/}
            </Switch>
        </BrowserRouter>
        </>
    )
}