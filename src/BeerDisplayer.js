import React from 'react';
import "./BeerDisplayer.css"

class BeerDisplayer extends React.Component {
    render() {
        return (
            <div className="beer-displayer">
                <img src={this.props.image_url} height={this.props.mode === "mosaic" ? "100" : "200"}></img>
                <h2 title={this.props.name}>{this.props.name}</h2>
            </div>
        )
    }
}

export default BeerDisplayer;
