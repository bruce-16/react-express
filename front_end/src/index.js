import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



// import App from './App'
import NotFound from './containers/NotFound';
import Main from './containers/Show/Main';
import User from './containers/User/Main';
import Edit from './containers/Edit/Main';
import Login from './containers/Login/Main';

const Index = () => (
  <Router>
      <Switch>
        {/*主页，显示发表的内容  */}
        {/* <Route path="/"  component={(props) => (
          <Main {...props}>
            <Switch>
              <Route path={`/login`} component={Login}/>
            </Switch>
          </Main>
        )}/>  */}
        <Route path="/" component={Main}/>  
        {/*用户页： 注册，登录，个人详情  */}
        <Route path="/user" component={User}/>
        {/*发表文章  */}
        <Route path="/edit" component={Edit}/>
        {/*错误页面  */}
        <Route component={NotFound}/>
      </Switch>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
