import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

