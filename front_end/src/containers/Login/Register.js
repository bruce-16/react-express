import React, { Component } from 'react';
import {Row, Col, Button, Form, Input, Icon, Select} from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const Option = Select.Option;

class Register extends Component {
  static propTypes = {
    onInOrUp: PropTypes.func.isRequire
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不想同，请重新输入。');
    } else {
      //不管结果怎么样都需要返回callback
      callback();
    }
  }

  checkPhoneNumber = (rule, value, callback) => {
    const regExp = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    if(value && !regExp.test(value)){
      callback('输入电话号码格式有误。')
    }else{
      callback();
    }
  }

  onInOrUp = e => {
    e.preventDefault();
    let { onInOrUp } = this.props;
    onInOrUp();
  }

  render(){
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 80 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <Row type="flex" justify="center" align="middle" style={{height: '100%'}}>
        <Col span="5">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem
              {...formItemLayout}
              label="电话号码"
              hasFeedback
            >
              {getFieldDecorator('phone', {
                rules: [{ 
                  required: true, message: '请输入你的电话号码' 
                },{
                  validator: this.checkPhoneNumber
                }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{ 
                  required: true, message: '请重复输入你的密码' 
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Row type="flex" justify="space-between">
                <a href='' onClick={this.onInOrUp}>返回登录</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  注册
                </Button>
              </Row>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedRegister = Form.create()(Register);
export default WrappedRegister;