import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header'
import Movies from './Movies'
import SelectTime from './SelectTime'
import SelectSeats from './SelectSeats'

export default function App(){
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
                    <SelectSeats />
                </Route>
                {/*<Route path="/congrats" exact>
                    <Tickets />
                </Route>*/}
            </Switch>
        </BrowserRouter>
        </>
    )
}