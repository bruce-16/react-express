import React, { Component } from 'react';
// import {Layout} from 'antd';
import Login from './Login';
import Register from './Register';
import PropTypes from 'prop-types';

import {USER, setItem} from '../../utils/localStorage';
// const { Content } = Layout;

// const styles = {
//   content: {
//     height: '100%', 
//     padding: '0 50px', 
//     background: 'white', 
//   }
// };

class LoginMain extends Component {
  static contextTypes = {
    changeLogined: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      InOrUp: true, /* true表示处于登录状态， false表示处于注册状态 */
    }
  }

  onInOrUp = () =>{
    this.setState({InOrUp: !this.state.InOrUp})
  }

  handleSuccess = (rst) => {
    // 存储用户的信息
    setItem(USER, JSON.stringify(rst));
    this.props.history.goBack();
    this.context.changeLogined();
  }

  render(){
    return (
      this.state.InOrUp 
      ? <Login 
          onInOrUp={this.onInOrUp}
          onSubmit={this.handleSuccess}
        /> 
      : <Register 
          onInOrUp={this.onInOrUp}
        />);
  }
}


export default LoginMain;