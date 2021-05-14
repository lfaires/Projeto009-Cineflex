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
    const [isHomePage, setIsHomePage] = useState(true)
    const [location, setLocation] = useState({})
    const [url, setUrl] = useState("")

    return (
        <>
        <Header home={isHomePage} goBack={location} url={url}/>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Movies setHome={setIsHomePage} />
                </Route>
                <Route path="/movie/:idMovie" exact>
                    <SelectTime setHome={setIsHomePage} setLocation={setLocation} setUrl={setUrl}/>
                </Route>
                <Route path="/movietime/:idTime" >
                    <SelectSeats setMovieChoosen={setMovieChoosen} setSeatsChoosen={setSeatsChoosen} setBuyerName={setBuyerName} setBuyerCpf={setBuyerCpf} setHome={setIsHomePage} setLocation={setLocation} setUrl={setUrl}/>
                </Route>
                <Route path="/ordercompleted" exact>
                    <OrderDetails seats={seatsChoosen} movie={movieChoosen} name={buyerName} cpf={buyerCpf} setHome={setIsHomePage}/>
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}