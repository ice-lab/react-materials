import React, { useState } from 'react';
import { Grid, DatePicker, Select, Input } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter(props) {
  const [value] = useState({});

  const formChange = (formValue) => {
    props.onChange(formValue);
  };

  return (
    <IceContainer>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
      >
        <Row wrap gutter="20" className={styles.formRow}>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>下单时间：</span>
              <IceFormBinder triggerType="onBlur" name="createOrderTime">
                <DatePicker placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="createOrderTime" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>商品名称：</span>
              <IceFormBinder triggerType="onBlur" name="productName">
                <Input placeholder="请输入" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="productName" />
              </div>
            </div>
          </Col>
          <Col l="8">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>下单方式：</span>
              <IceFormBinder triggerType="onBlur" name="orderMethod">
                <Select className={styles.onBlur}>
                  <Select.Option value="1">代下单</Select.Option>
                  <Select.Option value="2">自主下单</Select.Option>
                </Select>
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="orderMethod" />
              </div>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    </IceContainer>
  );
}
