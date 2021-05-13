import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import SelectTime from './SelectTime'
import SelectSeats from './SelectSeats'

export default function App(){
    const [seatsChoosen, setSeatsChoosen] = useState({})
    console.log(seatsChoosen)
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
                    <SelectSeats setSeatsChoosen={setSeatsChoosen} />
                </Route>
                {/*<Route path="/congrats" exact>
                    <Tickets />
                </Route>*/}
            </Switch>
        </BrowserRouter>
        </>
    )
}