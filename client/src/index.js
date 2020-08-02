import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer/Reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleWare = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWare)));

const Main = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(Main, document.getElementById("root"));
