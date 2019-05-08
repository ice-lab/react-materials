import React, { Component } from 'react';
import { Grid, Input, Button } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import './JoinUs.scss';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const telPattern = /^(1[\d]{1}[\d]{9})|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$|^([ ]?)$/;

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        username: '',
        email: '',
        phone: '',
        jobtitle: '',
        content: '',
      },
    };
  }

  formChange = (newValue) => {
    this.setState({
      formValue: newValue,
    });
  };

  handleSubmit = () => {
    this.form.validateAll((error, value) => {
      console.log(value);
    });
  };

  render() {
    return (
      <div
        // className="join-us"
        className={`${styles.container} ${styles.joinUs} join-us`}
      >
        <div className={styles.content}>
          <div className={styles.head}>
            <h2 className={styles.title}>我们的团队</h2>
            <p className={styles.intro}>
              我们是一支充满激情、志向远大、怀揣梦想的团队，
              <br />
              也是一个思维活跃、朝气蓬勃、团结互助的大家庭
            </p>
          </div>
          <FormBinderWrapper
            ref={(form) => {
              this.form = form;
            }}
            value={this.state.formValue}
            onChange={this.formChange}
          >
            <div className={styles.formContent}>
              <Row
                wrap
                gutter={20}
                // className="hoz-form-item"
                className={`${styles.hozFormItem} hoz-form-item`}
              >
                <Col span={8}>
                  <FormBinder required message="必填项" name="username">
                    <Input
                      className={styles.inputWidth}
                      placeholder="姓名"
                    />
                  </FormBinder>
                  <div className={styles.formErrorWrapper}>
                    <FormError name="username" className={styles.errorText} />
                  </div>
                </Col>
                <Col span={8}>
                  <FormBinder
                    type="email"
                    required
                    message="邮箱不合法"
                    name="email"
                  >
                    <Input
                      className={styles.inputWidth}
                      placeholder="邮箱"
                    />
                  </FormBinder>
                  <div className={styles.formErrorWrapper}>
                    <FormError name="email" className={styles.errorText} />
                  </div>
                </Col>
                <Col span={8}>
                  <FormBinder
                    required
                    message="请输入合法的电话号码"
                    pattern={telPattern}
                    triggerType="onBlur"
                    name="phone"
                  >
                    <Input
                      className={styles.inputWidth}
                      placeholder="电话"
                    />
                  </FormBinder>
                  <div className={styles.formErrorWrapper}>
                    <FormError name="phone" className={styles.errorText} />
                  </div>
                </Col>
                <Col span={24} className={styles.verFormItem}>
                  <FormBinder name="jobtitle">
                    <Input
                      className={styles.inputWidth}
                      placeholder="职位"
                    />
                  </FormBinder>
                </Col>
                <Col
                  span={24}
                  // className="ver-form-item"
                  className={`${styles.verFormItem} ver-form-item`}
                >
                  <FormBinder name="content">
                    <Input.TextArea
                      className={styles.inputWidth}
                      placeholder="一些自我介绍"
                    />
                  </FormBinder>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    className={styles.submitBtn}
                  >
                    提交
                  </Button>
                </Col>
              </Row>
            </div>
          </FormBinderWrapper>
        </div>
      </div>
    );
  }
}


