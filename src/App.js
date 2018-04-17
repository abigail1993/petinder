import React, { Component } from 'react';
import './App.css';
import Selection from './Components/Selection';
//import Options from './Components/Options';

class App extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      dogs: [],
      cats: []
    }
  }

  componentDidMount() {
        console.log('--componentDidMount--')
        fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=bde6bfb57ad8ab2f7878b97cb1c5dae2&animal=dog&location=LA')
          .then((response) => {
            return response.json()
          }).then((response) => {
            this.setState({
              dogs: response.petfinder.pets
            })
          })

        fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=bde6bfb57ad8ab2f7878b97cb1c5dae2&animal=cat&location=LA')
          .then((response) => {
            return response.json()
          }).then((response) => {
            this.setState({
              cats: response.petfinder.pets
            })
          })
  }

  render() {
    return (
      <div className="App">
            <Selection dogs={this.state.dogs} cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
