/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class BorrowTableHead extends Component {
  static displayName = 'BorrowTableHead';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  formChange = (value) => {
    console.log('formChange', value);
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
              <span className={styles.formLabel}>图书名称：</span>
              <IceFormBinder name="bookName" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>借阅编号：</span>
              <IceFormBinder name="number" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>ISBN 号：</span>
              <IceFormBinder name="isbn" triggerType="onBlur">
                <Input placeholder="请输入" />
              </IceFormBinder>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    );
  }
}

