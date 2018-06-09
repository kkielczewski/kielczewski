import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/store';

const store = configureStore();

ReactDOM.render(<div></div>
  , document.getElementById('react-app'),
);
