import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getPokemon(action) {
  try {
    const response = yield axios.get('/api/pokemon/all');
    console.log(response);
    yield put({
      type: 'SET_POKEMON',
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

export default getPokemon;
