import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header"

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
                <Route path="/movietime/:idTime" exact>
                    <SelectSeat />
                </Route>
                <Route path="/congrats" exact>
                    <Tickets />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}