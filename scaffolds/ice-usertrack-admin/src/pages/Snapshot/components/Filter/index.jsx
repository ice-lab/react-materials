import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Filter({ onChange }) {
  const formRef = useRef(null);
  const [value, setValue] = useState({});

  function handleSubmit() {
    formRef.current.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      onChange(values);
    });
  }
  function handleFormChange(formValue) {
    setValue(formValue);
  }

  return (
    <IceContainer className={styles.container}>
      <h4 className={styles.title}>快照过滤</h4>
      <IceFormBinderWrapper
        value={value}
        ref={formRef}
        onChange={handleFormChange}
      >
        <Row wrap gutter="20" className={styles.formRow}>
          <Col l="7">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>验证方案：</span>
              <IceFormBinder name="scheme" triggerType="onBlur">
                <Input
                  placeholder="请输入验证方案"
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="scheme" />
              </div>
            </div>
          </Col>
          <Col l="7">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>APP 版本：</span>
              <IceFormBinder name="version" triggerType="onBlur">
                <Input placeholder="请输入版本" />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="version" />
              </div>
            </div>
          </Col>
          <Col l="7">
            <div className={styles.formItem}>
              <span className={styles.formLabel}>创建人：</span>
              <IceFormBinder name="creator" triggerType="onBlur">
                <Input
                  placeholder="请输入创建人"
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="creator" />
              </div>
            </div>
          </Col>
          <Col l="3" xxs="24">
            <div className={styles.formItem}>
              <Button
                type="primary"
                onClick={handleSubmit}
              >
                搜 索
              </Button>
            </div>
          </Col>
        </Row>
      </IceFormBinderWrapper>
    </IceContainer>
  );
}
