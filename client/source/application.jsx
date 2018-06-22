import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/redux';
import './styles/base.scss';
import View from './app/containers/View';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <div className="app-container" style={{ height: '100%' }} >
        <View />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('react-app'),
);
