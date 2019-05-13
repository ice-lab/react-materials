/* eslint-disable react/no-unused-state */
import React, { Component } from '_react@16.8.6@react';
import { Input, Select, Grid } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '_@icedesign_form-binder@1.0.6@@icedesign/form-binder/lib';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class UserTable extends Component {
  state = {
    formValue: {},
  };

  formChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const { formValue } = this.state;

    return (
      <IceContainer title="搜索">
        <FormBinderWrapper value={formValue} onChange={this.formChange}>
          <Row wrap>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>学校:</span>
              <FormBinder name="university">
                <Select placeholder="请选择" style={{ width: '200px' }}>
                  <Select.Option value="zhejiang">浙江大学</Select.Option>
                  <Select.Option value="fudan">上海复旦</Select.Option>
                  <Select.Option value="zhongshan">中山大学</Select.Option>
                </Select>
              </FormBinder>
            </Col>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>院系:</span>
              <FormBinder name="college">
                <Select placeholder="请选择" style={{ width: '200px' }}>
                  <Select.Option value="computer">计算机学院</Select.Option>
                  <Select.Option value="design">设计学院</Select.Option>
                </Select>
              </FormBinder>
            </Col>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>班级:</span>
              <FormBinder name="class">
                <Input />
              </FormBinder>
            </Col>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>姓名:</span>
              <FormBinder name="name">
                <Input />
              </FormBinder>
            </Col>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>电话:</span>
              <FormBinder name="phone">
                <Input />
              </FormBinder>
            </Col>
            <Col xxs="24" l="8" className={styles.formCol}>
              <span className={styles.label}>角色:</span>
              <FormBinder name="role">
                <Input />
              </FormBinder>
            </Col>
          </Row>
        </FormBinderWrapper>
      </IceContainer>
    );
  }
}