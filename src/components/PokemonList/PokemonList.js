import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonListItem from '../PokemonListItem/PokemonListItem';
import './PokemonList.css';
class PokemonList extends Component {
  render() {
    const pokemonListArray = this.props.store.pokemonReducer.map(
      (item, index) => {
        return (
          <div className="pokemonListItem">
            <PokemonListItem
              pokemon={item}
              clickPokemon={this.props.clickPokemon}
            />
          </div>
        );
      }
    );

    return <div>{pokemonListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(PokemonList);
