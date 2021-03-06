import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonListItem.css';

class PokemonListItem extends Component {
  render() {
    return (
      <div
        className="pokemonListItem"
        onClick={this.props.clickPokemon(this.props.pokemon.id)}
      >
        <img
          alt={this.props.pokemon.description}
          src={this.props.pokemon.images}
        />
        <h4>{this.props.pokemon.name}</h4>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(PokemonListItem);
