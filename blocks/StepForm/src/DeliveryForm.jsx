import React, { useState, useRef } from 'react';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Button,
  Checkbox,
  Grid,
} from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const CheckboxGroup = Checkbox.Group;

export default function DeliveryForm(props) {
  const formRef = useRef(null);
  const [value, setValue] = useState({
    type: '',
    fee: '',
  });

  const onFormChange = (value) => {
    setValue(value);
  };

  const submit = () => {
    formRef.current.validateAll((error, value) => {
      console.log(value);
      if (!error || error.length === 0) {
        props.onSubmit();
      }
    });
  };

  return (
    <IceFormBinderWrapper
      ref={formRef}
      value={value}
      onChange={onFormChange}
    >
      <div>
        <h3 className={styles.formTitle}>商品信息</h3>
        <Row className={styles.formItem}>
          <Col xxs="6" s="4" l="3" className={styles.formLabel}>
            物流公司：
          </Col>
          <Col s="12" l="10">
            <IceFormBinder name="type" type="array">
              <CheckboxGroup
                className="next-form-text-align"
                required
                message="请选择物流公司"
                dataSource={[
                  { label: '顺丰', value: 'shunfeng' },
                  { label: '百世汇通', value: 'baishi' },
                ]}
              />
            </IceFormBinder>
            <IceFormError name="type" />
          </Col>
        </Row>
        <Row className={styles.formItem}>
          <Col xxs="6" s="4" l="3" className={styles.formLabel}>
            配送费用：
          </Col>
          <Col s="12" l="10">
            <IceFormBinder name="fee">
              <Input
                size="large"
                placeholder="请输入配送费用"
              />
            </IceFormBinder>
            <IceFormError name="fee" />
          </Col>
        </Row>
        <Row>
          <Col offset={3} className={styles.btns}>
            <Button onClick={submit} type="primary">
              下一步
            </Button>
          </Col>
        </Row>
      </div>
    </IceFormBinderWrapper>
  );
}
