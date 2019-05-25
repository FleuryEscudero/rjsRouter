import React, { Component } from 'react'
import '../css/Buscador.css'

class Browser extends Component {

    readData = (e) => {
        const t = e.target.value;

        this.props.searchP(t);
    }


    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Buscar" onChange={this.readData} />
            </form>
        );
    }
}

export default Browser;