import React from 'react';
import './App.css';
import { Link, Switch, Route } from "react-router-dom"
import BeerDisplayerSection from './BeerDisplayerSection';
import BeerRandomSection from './BeerRandomSection';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/random">Random Beer</Link>
          <Link to="/all/mosaic">All in mosaic mode</Link>
          <Link to="/all/compact">All in compact mode</Link>
        </nav>
        <Switch>
          <Route path="/random" render={() => {
            return <BeerRandomSection></BeerRandomSection>
          }}></Route>
          <Route path="/all/:mode" component={BeerDisplayerSection}></Route>
        </Switch>
        <footer>
          Copyright Ironhack
        </footer>
      </React.Fragment>
    )
  }
}

export default App;
