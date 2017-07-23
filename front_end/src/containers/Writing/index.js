import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Input, Row, Button } from 'antd';

 const Title = (
  <span style={{fontSize: 15}}>标题：</span>
);

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: false
    }
  }

  handleChange = (value) => {
    this.setState({ text: value })
  }

  

  render (){
    return (
      <div style={{marginTop: 20}}>
        <Input addonBefore={Title} style={{width: '100%'}} size="large"/>
        <ReactQuill value={this.state.text}
          onChange={this.handleChange}>
          <Input type="textarea" rows="20"/>
        </ReactQuill>
        <Row type="flex" justify='center' style={{margin: '20px 0'}}>
          <Button type="" style={{marginRight: '20px'}} onClick={() => {
            console.log('点击取消');
          }}>取消</Button>
          <Button loading={this.state.loading} type="primary" onClick={() => {
            this.setState({loading: true});
            console.log('点击提交');
          }}>确定</Button>
        </Row>
      </div>
    );
  }
}

export default Writing;