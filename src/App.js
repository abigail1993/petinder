import React, { Component } from 'react';
import './App.css';
import Selection from './Components/Selection';
import Navbar from './Components/Navbar'
import Matches from './Components/Matches';
import Options from './Components/Options';
import { Link, Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      pets: []
    }
  }

  componentDidMount() {
        console.log('--componentDidMount--')
        fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?format=json&key=bde6bfb57ad8ab2f7878b97cb1c5dae2&animal=cat')
          .then((response) => {
            return response.json()
          }).then((response) => {
            console.log(response.petfinder.breeds)
            this.setState({
              pets: response.petfinder.breeds,
            })
          })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path = '/' exact render = { () => { return ( <Selection 
          pets={this.state.pets}
          />)}}/>
          <Route path = '/Favorites' exact render = { () => { return ( <Options 
          // algun estado...
          />)}}/>
          <Route path = '/Matches' exact render = { () => { return ( <Matches 
          // algun estado...
          />)}}/>
        </Switch>
        <section>
          <Navbar/>
        </section>
      </div>
    );
  }
}

export default App;
