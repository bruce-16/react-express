import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import NotFound from './routers/NotFound';
import User from './routers/User';

import Main from './routers/main';
import Home from './routers/Home';


const Routers = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    
    <Route path="/main" component={Main}>
      <IndexRoute component={Home}/>
    </Route>

    <Route path="/user/:id" component={User}/> 
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
