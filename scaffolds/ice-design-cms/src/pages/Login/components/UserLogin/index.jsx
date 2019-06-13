/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Checkbox, Grid } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import styles from'./index.module.scss';

const { Row, Col } = Grid;

// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage =
  require('./images/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png');

@withRouter
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
      console.log(this.props);
      this.props.history.push('/');
      // HashRouter.push('/');
    });
  };

  render() {
    return (
      <div className={styles.userLogin} className="user-login">
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundSize: 'cover',
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className={styles.contentWrapper}>
          <h2 className={styles.slogan}>
            欢迎使用 <br /> ICE 内容管理系统
          </h2>
          <div className={styles.formContainer}>
            <h4 className={styles.formTitle}>登录</h4>
            <IceFormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <div className={styles.formItems}>
                <Row className={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="person"
                      size="small"
                      className={styles.inputIcon}
                    />
                    <IceFormBinder name="account" required message="必填">
                      <Input maxLength={20} placeholder="会员名/邮箱/手机号" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="account" />
                  </Col>
                </Row>

                <Row className={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="lock"
                      size="small"
                      className={styles.inputIcon}
                    />
                    <IceFormBinder name="password" required message="必填">
                      <Input htmlType="password" placeholder="密码" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="password" />
                  </Col>
                </Row>

                <Row className={styles.formItem}>
                  <Col>
                    <IceFormBinder name="checkbox">
                      <Checkbox className={styles.checkbox}>记住账号</Checkbox>
                    </IceFormBinder>
                  </Col>
                </Row>

                <Row className={styles.formItem}>
                  <Button
                    type="primary"
                    onClick={this.handleSubmit}
                    className={styles.submitBtn}
                  >
                    登 录
                  </Button>
                </Row>

                <Row className={styles.tips}>
                  <a href="/" className={styles.link}>
                    立即注册
                  </a>
                  <span className={styles.line}>|</span>
                  <a href="/" className={styles.link}>
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
