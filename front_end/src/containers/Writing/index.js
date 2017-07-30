import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Input, Row, Button, Form, Modal } from 'antd';
import {USER, getItem} from '../../utils/localStorage';
import {addRecord} from '../../server/records';

const FormItem = Form.Item; 

 const Title = (
  <span style={{fontSize: 15}}>标题：</span>
);

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      loading: false
    }
  }

  handleContentChange = (value) => {
    this.setState({ content: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      // 提交加入内容和作者ID,
      values.content = this.state.content;
      values.author = JSON.parse(getItem(USER))._id;
      addRecord(values, (rst) => {
        Modal.success({title:'提示', content: '发表成功！'});
        this.setState({loading: false});
      });
    });
  }

  render (){
    const {getFieldDecorator} = this.props.form;
    return (
      <div style={{marginTop: 20}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ 
                required: true, 
                message: '请输入标题' 
              }],
            })(
              <Input 
                addonBefore={Title} 
                style={{width: '100%'}} 
                size="large"/>
            )}
          </FormItem>
          {/* 内容区域  */}
          <ReactQuill value={this.state.content}
            onChange={this.handleContentChange}>
            <div className="my-editing-area" style={{height: 400}}/>
          </ReactQuill>
          {/* 按钮区域 */}
          <FormItem>
            <Row type="flex" justify='center' style={{margin: '20px 0'}}>
              <Button type="" style={{marginRight: '20px'}} onClick={() => {
                console.log('点击取消');
              }}>取消</Button>
              <Button loading={this.state.loading} type="primary" htmlType="submit">确定</Button>
            </Row>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const WritingForm = Form.create()(Writing);
export default WritingForm;