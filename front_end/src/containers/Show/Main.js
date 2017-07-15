import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import Login from '../Login/Main';
import {Route, Switch} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const styles = {
  header: {
    background: '#FA7D3C',
    position: 'fixed', 
    width: '100%'
  },
  headerCenter: {
    fontSize: 40,
    color: '#FFF'
  },
  headerLeft: {
    fontSize: 25,
    color: '#FFF'
  },
  content: {
    height: '100%', 
    padding: '0 50px', 
    background: 'white', 
    marginTop: 64,
  },
  footer: {
    width: '100%',
    textAlign: 'center',
  },
}

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      logined: false
    }
  }

  handleCilck = e => {
    e.preventDefault()
    // 做一些路由的跳转
    let {history} = this.props;
    history.push(`/login`);
  }

  render() {
    return (
      <Layout className="layout" style={{height: '100%'}}>
        <Header style={styles.header}>
          <Row type="flex" justify="center">
            <Col span={4}>
              <Button shape="circle" size="large" ghost onClick={this.handleCilck} icon="user"/>
            </Col>
            <Col span={16} style={styles.headerCenter}>
              <Row type="flex" justify="center">
                <Col >微博</Col>
              </Row>
            </Col>
            <Col span={4}>
            {
              this.state.logined ? ('用户图像等') : ''
            }
            </Col>
          </Row>
        </Header>
        <Content style={styles.content}>
          { 
            /*子路由*/
            <Switch>
              <Route path="/login" component={Login}/>
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