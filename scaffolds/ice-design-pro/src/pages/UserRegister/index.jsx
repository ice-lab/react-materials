/* eslint react/no-string-refs:0 */
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Grid, Form } from '@alifd/next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FoundationSymbol from '@icedesign/foundation-symbol';
import injectReducer from '../../utils/injectReducer';
import { userRegister } from './action';
import reducer from './reducer';

const Icon = FoundationSymbol;
const { Row } = Grid;
const FormItem = Form.Item;

function checkPasswd(rule, values, callback) {
  if (!values) {
    callback('请输入正确的密码');
  } else if (values.length < 8) {
    callback('密码必须大于8位');
  } else if (values.length > 16) {
    callback('密码必须小于16位');
  } else {
    callback();
  }
}

function checkPasswd2(rule, values, callback, stateValues) {
  if (!values) {
    callback('请输入正确的密码');
  } else if (values && values !== stateValues.passwd) {
    callback('两次输入密码不一致');
  } else {
    callback();
  }
}

const UserRegister = withRouter((props) => {
  const [value, useValue] = useState({
    name: '',
    email: '',
    passwd: '',
    rePasswd: '',
  });

  function formChange(value) {
    useValue(value);
  }

  function handleSubmit(values, errors) {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    props.userRegister(values);
  }

  return (
    <div className="user-register">
      <div className="formContainer">
        <Form value={value} onChange={formChange}>
          <FormItem
            required
            requiredMessage="请输入正确的用户名"
            className="formItem"
          >
            <Input
              innerBefore={
                <Icon type="person" size="small" className="inputIcon" />
              }
              name="name"
              maxLength={20}
              placeholder="用户名"
            />
          </FormItem>
          <FormItem
            required
            requiredMessage="请输入正确的邮箱"
            className="formItem"
          >
            <Input
              innerBefore={
                <Icon type="mail" size="small" className="inputIcon" />
              }
              name="email"
              maxLength={20}
              placeholder="邮箱"
            />
          </FormItem>
          <FormItem
            required
            requiredMessage="请输入正确的密码"
            className="formItem"
          >
            <Input
              innerBefore={
                <Icon
                  type="lock"
                  size="small"
                  todo="lock"
                  className="inputIcon"
                />
              }
              name="passwd"
              htmlType="password"
              placeholder="至少8位密码"
            />
          </FormItem>

          <FormItem
            required
            validator={(rule, values, callback) =>
              checkPasswd2(rule, values, callback, value)
            }
            className="formItem"
          >
            <Input
              innerBefore={
                <Icon
                  type="lock"
                  size="small"
                  todo="lock"
                  className="inputIcon"
                />
              }
              name="rePasswd"
              htmlType="password"
              placeholder="至少8位密码"
            />
          </FormItem>
          <Row className="formItem">
            <Form.Submit
              type="primary"
              validate
              onClick={handleSubmit}
              className="submitBtn"
            >
              注 册
            </Form.Submit>
          </Row>

          <Row className="tips">
            <Link to="/user/login" className="tips-text">
              使用已有账户登录
            </Link>
          </Row>
        </Form>
      </div>
    </div>
  );
});

UserRegister.displayName = 'UserRegister';

const mapDispatchToProps = { userRegister };

const mapStateToProps = (state) => {
  return { registerResult: state.register };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'register', reducer });

export default compose(
  withReducer,
  withConnect
)(UserRegister);
