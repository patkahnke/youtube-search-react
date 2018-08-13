import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    favorites: []
  }

  componentDidMount() {
    this.getFavorites();
  }

  renderFavorite = ({ favorite_id, title}) => <div key={favorite_id}>{title}</div>

  getFavorites = _ => {
    fetch('http://localhost:4000/favorites', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => this.setState({ favorites: response}))
    .catch(err => console.error(err))
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className="App">
        {favorites.map(this.renderFavorite)}
      </div>
    );
  }
}

export default App;
