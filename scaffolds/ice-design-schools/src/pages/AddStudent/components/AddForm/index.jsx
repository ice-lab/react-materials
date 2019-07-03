import React, { useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Select, Grid, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder/lib';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;

export default function BaseSetting() {
  const formEl = useRef(null);

  const validateAllFormField = () => {
    formEl.current.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log(values);
      Message.success('提交成功');
    });
  };

  return (
    <IceContainer>
      <IceFormBinderWrapper ref={formEl}>
        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>添加学生</h2>

          <Row className={styles.formItem}>
            <Col l="2" className={styles.label}>
              姓名：
            </Col>
            <Col l="5">
              <IceFormBinder name="name" required max={10} message="必填">
                <Input
                  className={styles.inputItem}
                  placeholder="淘小宝"
                />
              </IceFormBinder>
              <IceFormError name="name" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col l="2" className={styles.label}>
              性别：
            </Col>
            <Col l="5">
              <IceFormBinder name="gender" required message="必填">
                <RadioGroup>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </RadioGroup>
              </IceFormBinder>
              <IceFormError name="gender" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col l="2" className={styles.label}>
              年级：
            </Col>
            <Col l="5">
              <IceFormBinder name="grade" required message="必填">
                <Select>
                  <Select.Option value="1">大一</Select.Option>
                  <Select.Option value="2">大二</Select.Option>
                  <Select.Option value="3">大二</Select.Option>
                  <Select.Option value="4">大四</Select.Option>
                </Select>
              </IceFormBinder>
              <IceFormError name="grade" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col l="2" className={styles.label}>
              联系电话：
            </Col>
            <Col l="5">
              <IceFormBinder name="phone" required message="必填">
                <Input className={styles.inputItem} />
              </IceFormBinder>
              <IceFormError name="phone" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col l="2" className={styles.label}>
              院系：
            </Col>
            <Col l="5">
              <IceFormBinder name="faculty" required max={10} message="必填">
                <Input
                  className={styles.inputItem}
                  placeholder="计算机"
                />
              </IceFormBinder>
              <IceFormError name="faculty" />
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>

      <Row style={{ marginTop: 20 }}>
        <Col offset="3">
          <Button
            type="primary"
            style={{ width: 100 }}
            onClick={validateAllFormField}
          >
            提 交
          </Button>
        </Col>
      </Row>
    </IceContainer>
  );
}
