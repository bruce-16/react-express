import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

const Routers = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
