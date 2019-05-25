import React from 'react';
import {Route, Router} from 'react-router-dom';

//Auth
import Callback from '../components/Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//Components
import Us from '../components/Us';
import Error from '../components/Error';
import Products from '../components/Products';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SingleProduct from '../components/SingleProduct';
import Nav from '../components/Nav';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            
                <Header/>
                <Nav/>
                <Route
                    exact
                    path="/"
                    render={(props) => (<Products /*  products={result} */ /* searchP={this.searchP} */ auth={auth} {...props}/>)}/>
                <Route
                    exact
                    path="/products"
                    render={(props) => (<Products /* products={result} */ /* searchP={this.searchP} */ auth={auth} {...props}/>)}/>
                <Route
                    exact
                    path="/producto/:productId"
                    render={(props) => {
                    let productId = props
                        .location
                        .pathname
                        .replace('/producto/', '')
                        return (<SingleProduct product={this.state.products[productId]} auth={auth} {...props}/>)
                }}/>
                <Route exact path="/us" component={Us}/>
                <Route exact path="/contact" component={Contact}/>
                <Route
                    path="/callback"
                    render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props}/>
                }}/>
           
        </Router>
    );
}
