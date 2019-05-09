/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Button, Grid, Message, Icon, Form } from '@alifd/next';
import './Register.scss';
import './index.modules.scss'

const { Row, Col } = Grid;
const Item = Form.Item;

export default class Register extends Component {
  static displayName = 'Register';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        email: '',
        passwd: '',
        rePasswd: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (values, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    Message.success('注册成功');
    // 注册成功后做对应的逻辑处理
  };

  render() {
    return (
      <div  className="user-register stylescontainer">
        <div className="stylesheader">
          <a href="#" className="stylesmeta">
            <img
              className="styleslogo"
              src={require('./images/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png')}
              alt="logo"
            />
            <span className="stylestitle">飞冰</span>
          </a>
          <p className="stylesdesc">飞冰让前端开发简单而友好</p>
        </div>
        <div className="stylesformContainer">
          <h4 className="stylesformTitle">注 册</h4>
          <Form
            value={this.state.value}
            onChange={this.formChange}
            size="large"
          >
              <Item
                required
                requiredMessage="请输入正确的用户名"
              >
                <Input name="username" size="large" placeholder="用户名" className="inputbox"
                  innerBefore={<Icon
                    type="account"
                    size="small"
                    className="stylesinputIcon"
                  />}
                />
              </Item>
              <Item
                type="email"
                required
                message="请输入正确的邮箱"
              >
                <Input name="email" size="large" maxLength={20} placeholder="邮箱" className="inputbox"
                  innerBefore={<Icon type="email" size="small" className="stylesinputIcon" />} />
              </Item>

              <Item
                required
                validator={this.checkPasswd}
              >
                <Input
                  name="passwd"
                  className="inputbox"
                  innerBefore={<Icon type="account" test="lock" size="small" className="stylesinputIcon" />}
                  htmlType="password"
                  size="large"
                  placeholder="至少8位密码"
                />
              </Item>
              <Item
                required
                validator={(rule, values, callback) =>
                  this.checkPasswd2(
                    rule,
                    values,
                    callback,
                    this.state.value
                  )
                }
              >
                <Input name="rePasswd"
                  className="inputbox"
                  innerBefore={<Icon type="email" test="lock" size="small" className="stylesinputIcon" />}
                  htmlType="password"
                  size="large"
                  placeholder="确认密码"
                />
              </Item>


              <Row>
                <Form.Submit
                  type="primary"
                  validate
                  onClick={this.handleSubmit}
                  className="stylessubmitBtn"
                >
                  注 册
                </Form.Submit>
              </Row>

              <Row className="stylestips">
                <a href="/" className="styleslink">
                  使用已有账户登录
                </a>
              </Row>
          </Form>
        </div>
      </div>
    );
  }
}
