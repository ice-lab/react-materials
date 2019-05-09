import React, { Component } from 'react';
import { Input, Button, Checkbox, Grid, Message, Icon } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './UserLogin.scss';

const { Row, Col } = Grid;

// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage = require('./images/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png');

export default class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account: undefined,
        password: undefined,
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      Message.success('登录成功');
      // 登录成功后可通过 hashHistory.push('/') 跳转首页
    });
  };

  render() {
    return (
      <div className="userLogin user-login" >
        <div
          className="userLoginBg" 
          
        />
        <div className="contentWrapper content-wrapper">
          <h2 className="slogan slogan">
            欢迎使用 <br /> ICE 内容管理系统
          </h2>
          <div className="formContainer">
            <h4 className="formTitle">登录</h4>
            <IceFormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <div className= "formItems">
                <Row className="formItem">
                  <Col>
                    <Icon
                      type="account"
                      size="small"
                      className="inputIcon"
                    />
                    <IceFormBinder name="account" required message="必填">
                      <Input maxLength={20} placeholder="会员名/邮箱/手机号" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="account" />
                  </Col>
                </Row>

                <Row className="formItem">
                  <Col>
                    <Icon
                      type="ellipsis"
                      test="lock"
                      size="small"
                      className="inputIcon"
                    />
                    <IceFormBinder name="password" required message="必填">
                      <Input htmlType="password" placeholder="密码" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="password" />
                  </Col>
                </Row>

                <Row className="formItem">
                  <Col>
                    <IceFormBinder name="checkbox">
                      <Checkbox className="checkbox">记住账号</Checkbox>
                    </IceFormBinder>
                  </Col>
                </Row>

                <Row className= "formItem">
                  <Button
                    type="primary"
                    onClick={this.handleSubmit}
                    className="submitBtn"
                  >
                    登 录
                  </Button>
                </Row>

                <Row className="tips" className="tips">
                  <a href="/" className="link">
                    立即注册
                  </a>
                  <span className="line">|</span>
                  <a href="/" className="link">
                    忘记密码
                  </a>
                </Row>
              </div>
            </IceFormBinderWrapper>
          </div>
        </div>
      </div>
    );
  }
}
