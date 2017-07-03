import React, { Component, Children, cloneElement } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
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
      <div>
        12312421
        {childrenWithProps}
      </div>
    );
  }
}

export default Main;
