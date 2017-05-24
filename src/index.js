import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// placeholder reducer
const reducer = (state = {}, action) => {
    return state;
};

// placeholder store
const store = createStore(reducer);

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(    
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
