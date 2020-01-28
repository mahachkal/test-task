import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducer';
import App from './App'
import './index.css'

const saveState = (state) => {
  try {
    const currentState = JSON.stringify(state);
    window.localStorage.setItem('appState', currentState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const currentState = window.localStorage.getItem('appState');
      if (!currentState) {
        return undefined;
      }
      return JSON.parse(currentState);
    } catch (err) {
      console.log(err);
      return undefined;
    }
};

const oldState = loadState();
const store = createStore(reducer, oldState);

store.subscribe(() => {
    saveState(store.getState());
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
