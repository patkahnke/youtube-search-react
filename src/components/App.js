import React, { Component } from 'react';
import Favorites from "./Favorites";
import '../css/App.css';

class App extends Component {

  state = {
    favorites: []
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    fetch('http://localhost:4000/favorites', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => this.setState({ favorites: response}))
    .catch(err => console.error(err))
  };

  render() {
    return (
      <div className="App">
        <h3>Favorites</h3>
        <ul className="video-list-item">
          {Object.keys(this.state.favorites).map(key => (
          <Favorites
            key={key}
            details={this.state.favorites[key]}
            />))}
        </ul>
      </div>
    );
  }
}

export default App;
