/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';
const { Row, Col } = Grid;

export default class TableHead extends Component {
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
              <span className={styles.formLabel}>部门：</span>
              <IceFormBinder name="type" triggerType="onBlur">
                <Select className={{ width: '200px' }}>
                  <Select.Option value="taobao">淘宝</Select.Option>
                  <Select.Option value="dingding">钉钉</Select.Option>
                  <Select.Option value="aliyun">阿里云</Select.Option>
                </Select>
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="type" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>负责人：</span>
              <IceFormBinder name="leader" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="leader" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>预算：</span>
              <IceFormBinder name="budget" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="budget" />
              </div>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}


