import React from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom"
import axios from "axios";

// BeerDisplayerSection
// BeerRandomSection

class BeerRandomSection extends React.Component {
    state = {
        beerInfo: {}
    }

    getRandomBeer() {
        axios
        .get("http://localhost:5000/random")
        .then(randomBeerPayload => {
            this.setState({
                ...this.state,
                beerInfo: randomBeerPayload.data
            })
        })
    }

    componentDidMount() {
       this.getRandomBeer()
    }

    render() {
        return (
            <div>
                <h1>BeerRandomSection</h1>
                <button onClick={() => this.getRandomBeer()}>Refresh beer!</button>
                <section>
                    <h1>{this.state.beerInfo.name}</h1>
                    <img src={this.state.beerInfo.image_url} height="300"></img>
                    <p>{this.state.beerInfo.contributed_by}</p>
                </section>
            </div>
        )
    }
}

export default BeerRandomSection;
