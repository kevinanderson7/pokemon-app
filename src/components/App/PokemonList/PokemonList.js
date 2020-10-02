import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonList.css';
class PokemonList extends Component {
  render() {
    const pokemonListArray = this.props.store.pokemonReducer.map(
      (item, index) => {
        return (
          <div className="pokemonListItem">
            <img alt="pokemon" src={item.images} />
            <h4>{item.name}</h4>
          </div>
        );
      }
    );

    return <div>{pokemonListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(PokemonList);
