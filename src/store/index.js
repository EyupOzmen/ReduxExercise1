import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {username:"Eyup",balance:2500701}

export const store = createStore(reducer,initialState);