import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserComponent from './reducers/UserComponent';

const App = () => {
  return (
    <Provider store={store}>
      <UserComponent />
    </Provider>
  );
};

export default App;
