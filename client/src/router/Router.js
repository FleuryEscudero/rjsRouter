import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import Us from '../components/Us';
import Error from '../components/Error';
import Products from '../components/Products';
import Header from '../components/Header';
import Contact from '../components/Contact';
import SingleProduct from '../components/SingleProduct';
import Nav from '../components/Nav';

//data
import dataProducts from '../helpers/datos.json'

class Router extends Component {

    state = {
        products: [],
        searchP: ''
    }

    componentWillMount() {
        this.setState({
            products: dataProducts
        })
    }
    searchP = search => {
        if (search.length > 3) {
            this.setState({
                searchP: search
            })
        } else {
            this.setState({
                searchP: ''
            })
        }
    }

    render() {

        let products = [...this.state.products];
        let searchP = this.state.searchP;
        let result;

        if (searchP !== '') {
            result = products.filter(product => (
              product.nombre.toLowerCase().indexOf(searchP.toLowerCase()) !== -1
          ))
        } else {
            result = products;
            console.log(result)
        }

        return (
            <BrowserRouter>
                {/* //Todo el routing va a aqui */}
                <Header />
                <Nav />

                <Switch>
                    {/* //Diferentes Rutas */}
                    <Route exact path="/" render={() =>
                        (<Products
                            products={result}
                            searchP={this.searchP}
                        />)}
                    />
                    <Route exact path="/products" render={() =>
                        (<Products
                            products={result}
                            searchP={this.searchP}
                        />)}
                    />

                    <Route exact path="/producto/:productId" render={(props) => {
                        let productId = props.location.pathname.replace('/producto/', '')
                        return (
                            <SingleProduct
                                product={this.state.products[productId]} />
                        )
                    }}
                    />
                    <Route exact path="/us" component={Us} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Error} />


                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;