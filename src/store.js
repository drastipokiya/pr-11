import { createStore } from 'redux';
import rootReducer from './reducers/userReducer'; // Create this file for your reducers

const store = createStore(rootReducer);

export default store;
