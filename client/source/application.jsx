import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/redux';
import Header from './app/components/header/header';
import Routes from './app/routes/';
import './styles/base.scss';
import i18n from './app/i18n/i18n';
import View from './app/containers/View';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} i18n={i18n} >
    <BrowserRouter>
      <div className="app-container" style={{ height: '100%' }} >
        <View i18n={i18n} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('react-app'),
);
