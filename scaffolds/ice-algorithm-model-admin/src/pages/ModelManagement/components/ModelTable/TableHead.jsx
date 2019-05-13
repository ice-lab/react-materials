/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import styles from './index.module.scss';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './table.module.scss';

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
              <span className={styles.formLabel}>模型服务：</span>
              <IceFormBinder name="modelname" triggerType="onBlur">
                <Select className={styles.width}>
                  <Select.Option value="option1">强化学习</Select.Option>
                  <Select.Option value="option2">无监督学习</Select.Option>
                  <Select.Option value="option3">监督学习</Select.Option>
                </Select>
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="modelname" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>创建人：</span>
              <IceFormBinder name="creator" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="creator" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>状态：</span>
              <IceFormBinder name="state" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="state" />
              </div>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}
