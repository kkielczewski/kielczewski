import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/store';
import Header from './app/components/header/header';
import Routes from './app/routes/';
import './styles/base.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('react-app'),
);
