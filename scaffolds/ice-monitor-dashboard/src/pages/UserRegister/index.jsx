/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Message, Icon, Form, Grid } from '@alifd/next';
const FormItem = Form.Item;
import styles from './index.module.scss';

const { Row, Col } = Grid;

@withRouter
class UserRegister extends Component {
  static displayName = 'UserRegister';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
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
    console.log(values);
    Message.success('注册成功');
    this.props.history.push('/user/login');
  };

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>注 册</h4>
        <Form
            value={this.state.value}
            onChange={this.formChange}
            size="large"
          >
            <FormItem required requiredMessage="请输入正确的用户名">
              <Input
                innerBefore={<Icon
                  type="account"
                  size="small"
                  className={styles.inputIcon}
                />}
                name="name" size="large" maxLength={20} placeholder="用户名" />
            </FormItem>
            <FormItem required requiredMessage="请输入正确的邮箱">
              <Input
                innerBefore={<Icon
                  type="email"
                  size="small"
                  className={styles.inputIcon}
                />}
                name="email" size="large" maxLength={20} placeholder="邮箱" />
            </FormItem>
            <FormItem required requiredMessage="请输入正确的邮箱">
              <Input
                innerBefore={<Icon
                  type="ellipsis"
                  size="small"
                  todo="lock"
                  className={styles.inputIcon}
                />}
                name="passwd"
                htmlType="password"
                size="large"
                placeholder="至少8位密码" />
            </FormItem>

            <FormItem required
              validator={(rule, values, callback) =>
                this.checkPasswd2(
                  rule,
                  values,
                  callback,
                  this.state.value
                )
              }>
              <Input
                innerBefore={<Icon
                  type="ellipsis"
                  size="small"
                  todo="lock"
                  className={styles.inputIcon}
                />}
                name="rePasswd"
                htmlType="password"
                size="large"
                placeholder="至少8位密码" />
            </FormItem>
            <Row className="formItem">
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                注 册
                </Form.Submit>
            </Row>

            <Row className="tips">
              <Link to="/account/login" className="tips-text">
                使用已有账户登录
                </Link>
            </Row>
          </Form>
      </div>
    );
  }
}



export default UserRegister;
