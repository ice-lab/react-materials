import React, { useState } from 'react';
import { DatePicker, Input, Grid } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { RangePicker } = DatePicker;
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
      <Row>
        <Col className={styles.formItem}>
          <span className={styles.formLabel}>发货时间：</span>
          <IceFormBinder triggerType="onBlur" name="dispatchTime">
            <RangePicker placeholder="请输入" className={styles.RangePicker} />
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name="dispatchTime" />
          </div>
        </Col>
        <Col className={styles.formItem}>
          <span className={styles.formLabel}>下单时间：</span>
          <IceFormBinder triggerType="onBlur" name="orderTime">
            <RangePicker placeholder="请输入" className={styles.RangePicker} />
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name="orderTime" />
          </div>
        </Col>
        <Col className={styles.formItem}>
          <span className={styles.formLabel}>商品名称：</span>
          <IceFormBinder triggerType="onBlur" name="productName">
            <Input placeholder="请输入" className={styles.RangePicker} />
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name="productName" />
          </div>
        </Col>
      </Row>
    </IceFormBinderWrapper>
  );
}
