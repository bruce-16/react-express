import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {USER, setItem} from '../../utils/localStorage';
import {userLogin} from '../../server/login';
import Login from '../Login/Main';
import Writing from '../Writing/index';

const {Header, Content, Footer} = Layout;

const styles = {
  header: {
    background: '#FA7D3C',
    position: 'fixed', 
    width: '100%'
  },
  headerCenter: {
    fontSize: 40,
    color: '#FFF',
    cursor: 'pointer'
  },
  headerLeft: {
    fontSize: 25,
    color: '#FFF'
  },
  content: {
    height: '100%', 
    padding: '10px 50px', 
    background: 'white', 
    marginTop: 64,
    overflow: 'auto'
  },
  footer: {
    width: '100%',
    textAlign: 'center',
  },
}

class Main extends Component {
  static childContextTypes = {
    changeLogined: PropTypes.func
  }

  constructor(props){
    super(props)
    this.state = {
      logined: false
    }
  }

  componentDidMount(){
    userLogin({}, (rst) => {
      // session已经过期，登录状态为空
      console.log('login rst', rst);
      if(rst.status !== 0){
        setItem(USER, null);
        this.setState({logined: false});
      } else {
        this.setState({logined: true});
      }
    });
  }

  // 将改变登陆状态的函数，以上下文的形式传入子组件
  getChildContext = () => {
    return {
      changeLogined: this.changeLogined
    }
  }
  changeLogined = () => {
    this.setState({logined: !this.state.logined});
  }

  handleUserCilck = e => {
    e.preventDefault()
    // 做一些路由的跳转
    let {history} = this.props;
    history.push(`/login`);
  }
  
  handleWriteCilck = (e) => {
    e.preventDefault();
    // 做一些路由的跳转
    let {history} = this.props;
    history.push('/writing');
  }

  backMain = (e) => {
    e.preventDefault();
    // 做一些路由的跳转
    let {history} = this.props;
    history.push('/');
  }
  
  render() {
    return (
      <Layout className="layout" style={{height: '100%'}}>
        <Header style={styles.header}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <Button shape="circle" size="large" ghost onClick={this.handleUserCilck} icon="user"/>
            </Col>
            <Col span={16} style={styles.headerCenter} onClick={this.backMain}>
              <Row type="flex" justify="center">
                <Col >微博</Col>
              </Row>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end" align="middle" style={{height: '100%'}}>
                {
                  this.state.logined 
                  ? <Button shape="circle" size="large" ghost onClick={this.handleWriteCilck} icon="edit"/>
                  : ''
                }
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={styles.content}>
          { 
            /*子路由*/
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/writing" component={Writing}/>
            </Switch>
          }
        </Content>
        <Footer style={styles.footer}>
          zzzzz ©2017 Created by zachrey
        </Footer>  
      </Layout>
    );
  }
}

export default Main;