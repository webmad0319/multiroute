import React from 'react';
import './BeerDisplayerSection.css';
import BeerDisplayer from './BeerDisplayer';
import axios from 'axios';


class BeerDisplayerSection extends React.Component {
    state = {
        allBeers: []
    }

    generateMosaic() {
        return (
            this.state.allBeers.map(beer => {
                return <BeerDisplayer mode="mosaic" name={beer.name} image_url={beer.image_url}></BeerDisplayer>
            })
        )
    }

    generateCompact() {
        return (
            this.state.allBeers.map(beer => {
                return <BeerDisplayer mode="compact" name={beer.name} image_url={beer.image_url}></BeerDisplayer>
            })
        )
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/all")
            .then(allBeers => {
                this.setState({
                    ...this.state,
                    allBeers: allBeers.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>BeerDisplayerSection</h1>

                <section className={this.props.match.params.mode}>
                    {
                        this.props.match.params.mode === "mosaic" ? this.generateMosaic() : null
                    }

                    {
                        this.props.match.params.mode === "compact" ? this.generateCompact() : null
                    }
                </section>
            </div>
        )
    }
}

export default BeerDisplayerSection;
