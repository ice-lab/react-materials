/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, DatePicker } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class Filter extends Component {
  state = {
    value: {},
  };

  formChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
        <Row wrap gutter="20" className={styles.formRow}>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>部门名称：</span>
              <IceFormBinder triggerType="onBlur" name="department">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="department" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>部门主管：</span>
              <IceFormBinder triggerType="onBlur" name="lead">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="lead" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>成立时间：</span>
              <IceFormBinder triggerType="onBlur" name="createTime">
                <DatePicker />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="createTime" />
              </div>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}
