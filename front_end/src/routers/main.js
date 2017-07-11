import React, { Component, Children, cloneElement } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
const {Header, Content, Footer} = Layout;


class Main extends Component {
  
  render() {
    const { children } = this.props;
    const childrenWithProps = Children.map(children, children => {
      return cloneElement(children, {
        //增加属性。
      });
    })
    return (
      <Layout className="layout" style={{height: '100%'}}>
        <Header style={{position: 'fixed', width: '100%'}}>
          <Row>
            <Col span={4} style={{color: 'white', fontSize: 20}}>
              weibo
            </Col>
            <Col span={20}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ height: '100%', padding: '0 50px', background: 'white', marginTop: 64 }}>
          { childrenWithProps }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Main;
