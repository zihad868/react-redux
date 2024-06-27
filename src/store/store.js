import { createStore } from 'redux';
import rootReducer from '../reducers/index'; // Your combined reducers

const store = createStore(rootReducer);

export default store;