import React, { Component } from 'react';
import {Row, Col, Button, Form, Input, Icon, Checkbox, message} from 'antd';
import PropTypes from 'prop-types';
import {userLogin} from '../../server/login';

const FormItem = Form.Item;

class Login extends Component {

  static propTypes = {
    onInOrUp: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  handleRegClick = e => {
    e.preventDefault();
    let { onInOrUp } = this.props;
    onInOrUp();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if(error) return;
      userLogin(values, rst => {
        message.success('登陆成功!', 2);
        setTimeout(() => {
          this.props.onSubmit(rst.data);
        }, 2000);
      });
    });
  }

  render(){
    const {getFieldDecorator} = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle" style={{height: '100%'}}>
        <Col span="5">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('pwd', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Row type="flex" justify="space-between">
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住我</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Row>
              <Row type="flex">
                <a href="">忘记密码</a>
                {'  或者  '}
                <a href="" onClick={this.handleRegClick}>注册</a>
              </Row>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;