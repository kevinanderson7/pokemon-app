import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Pokemon.css';
import { Button } from '@material-ui/core';

class Pokemon extends Component {
  state = {};
  componentDidMount() {
    if (this.props.store.pokemonReducer.length === 0) {
      this.props.dispatch({ type: 'GET_POKEMON' });
    }
  }
  backClicked = (event) => {
    this.props.history.push('/');
  };

  render() {
    if (this.props.store.pokemonReducer.length === 0) return <div>Loading</div>;

    let currentId = this.props.match.params.id;
    let currentPokemon = {};
    for (let pokemon of this.props.store.pokemonReducer) {
      if (parseInt(currentId) === pokemon.id) {
        currentPokemon = pokemon;
      }
    }

    if (!currentPokemon.id)
      return (
        <div>
          <div>
            <Button variant="contained" onClick={this.backClicked}>
              BACK
            </Button>
          </div>
          <h1>No Pokemon Found</h1>
        </div>
      );

    const typesArray = currentPokemon.types
      ? currentPokemon.types.map((item, index) => {
          return <span key={index}>{item.toUpperCase()} </span>;
        })
      : [];
    if (typesArray.length > 1) {
      return (
        <div className="currentPokemon">
          <div className="button">
            <Button variant="contained" onClick={this.backClicked}>
              BACK
            </Button>
          </div>
          <img src={currentPokemon.images} alt={currentPokemon.name} />
          <h1>{currentPokemon.name}</h1>
          <h6>Types: {typesArray}</h6>
          <p>{currentPokemon.description}</p>
        </div>
      );
    } else {
      return (
        <div className="currentPokemon">
          <div className="button">
            <Button variant="contained" onClick={this.backClicked}>
              BACK
            </Button>
          </div>
          <img src={currentPokemon.images} alt={currentPokemon.name} />
          <h1>{currentPokemon.name}</h1>
          <h6>Type: {typesArray}</h6>
          <p>{currentPokemon.description}</p>
        </div>
      );
    }
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon);
