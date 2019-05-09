/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Icon, Button, Checkbox, Grid, Form } from '@alifd/next';
import './SignupForm.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

export default class SignupForm extends Component {
  static displayName = 'SignupForm';

  handleSubmit = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="signup-form signupForm">
        <div className="formContainer">
          <h4 className="formTitle">登录</h4>
          <Form>
            <FormItem required requiredMessage="必填" className="formItem">
              <Input innerBefore={<Icon type="account" size="small" />} name="account" hasBorder={false} maxLength={20} placeholder="会员名/邮箱/手机号" 
              />
            </FormItem>

            <FormItem  className="formItem" required requiredMessage="必填" >
              <Input innerBefore={<Icon type="set" size="small" />} name="password" hasBorder={false} htmlType="password" placeholder="密码" />
            </FormItem>

            <FormItem className="formItem">
              <Checkbox name="checkbox">记住账号</Checkbox>
            </FormItem>

            <FormItem className="formItem">
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                登 录
                </Form.Submit >
            </FormItem>

            <Row className="tips" className="tips">
              <a href="/" className="link">
                立即注册
                </a>
              <span className="line">|</span>
              <a href="/" className="link">
                忘记密码
                </a>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}


