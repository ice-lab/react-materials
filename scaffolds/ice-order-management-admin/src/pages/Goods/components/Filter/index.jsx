import React, { useState } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter(props) {
  const [value] = useState({});

  const formChange = (formValue) => {
    props.onChange(formValue);
  };

  return (
    <IceFormBinderWrapper
      value={value}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        <Col l="6">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>商品名称：</span>
            <IceFormBinder triggerType="onBlur" name="name">
              <Input placeholder="请输入" className={styles.input} />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="name" />
            </div>
          </div>
        </Col>
        <Col l="6">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>商品分类：</span>
            <IceFormBinder triggerType="onBlur" name="cate">
              <Select className={styles.input}>
                <Select.Option value="1">智能</Select.Option>
                <Select.Option value="2">数码</Select.Option>
                <Select.Option value="3">新品</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="cate" />
            </div>
          </div>
        </Col>
        <Col l="6">
          <div className={styles.formItem}>
            <span className={styles.formLabel}>归属门店：</span>
            <IceFormBinder triggerType="onBlur" name="store">
              <Select className={styles.input}>
                <Select.Option value="1">余杭店</Select.Option>
                <Select.Option value="2">滨江店</Select.Option>
                <Select.Option value="3">西湖店</Select.Option>
              </Select>
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="store" />
            </div>
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
