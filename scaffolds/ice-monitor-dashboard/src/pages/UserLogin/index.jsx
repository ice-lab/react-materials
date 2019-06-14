/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message, Grid, Icon, Form } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
const { Row, Col } = Grid;

@withRouter
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        password: '',
        checkbox: false,
      },
    };
  }

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
    Message.success('登录成功');
    this.props.history.push('/');
  };


  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>登 录</h4>
        <Form
            value={this.state.value}
            onChange={this.formChange}
            size="large"
          >
            <FormItem required requiredMessage="必填">
              <Input
                innerBefore={<Icon
                  type="account"
                  size="small"
                  className={styles.inputIcon}
                />}
                name="username" size="large" maxLength={20} placeholder="用户名" />
            </FormItem>
            <FormItem required requiredMessage="必填">
              <Input
                innerBefore={<Icon
                  type="account"
                  size="small"
                  todo="lock"
                  className={styles.inputIcon}
                />}
                name="password"
                size="large"
                htmlType="password"
                placeholder="密码" />
            </FormItem>
            <FormItem>
              <Checkbox name="checkbox" className="checkbox">记住账号</Checkbox>
            </FormItem>
            <Row className="formItem">
              <Form.Submit
                type="primary"
                validate
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                登 录
                </Form.Submit>
            </Row>

            <Row className="tips">
              <Link to="/account/register" className="tips-text">
                立即注册
                </Link>
            </Row>
          </Form>
      </div>
    );
  }
}



export default UserLogin;
