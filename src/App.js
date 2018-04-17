import React, { Component } from 'react';
import './App.css';
import Selection from './Components/Selection';

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
      <Selection pets={this.state.pets}/>
      </div>
    );
  }
}

export default App;
