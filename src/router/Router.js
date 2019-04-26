import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Us from '../components/Us';
import Error from '../components/Error';




class Router extends Component {

    render() {
        return (
            <BrowserRouter>
            {/* //Todo el routing va a aqui */}


                <Switch>
                    {/* //Diferentes Rutas */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/us" component={Us}/>
                    <Route component={Error}/>


                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;