/* eslint  react/no-string-refs: 0 */
import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Switch, Grid } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;

export default function BaseSetting() {
  const formRef = useRef(null);
  const [value] = useState({
    name: '',
    gender: 'male',
    notice: false,
    email: '',
    avatar: '',
    siteUrl: '',
    githubUrl: '',
    twitterUrl: '',
    description: '',
  });

  const validateAllFormField = () => {
    formRef.current.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  return (
    <IceContainer>
      <IceFormBinderWrapper value={value} ref={formRef}>
        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>个人设置</h2>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              姓名：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="name" required max={10} message="必填">
                <Input className={styles.inputItem} placeholder="淘小宝" />
              </IceFormBinder>
              <IceFormError name="name" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              性别：
            </Col>
            <Col s="12" l="10">
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
            <Col xxs="6" s="3" l="3" className={styles.label}>
              通知：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder type="boolean" name="notice">
                <Switch
                  className={styles.switchBorder}
                />
              </IceFormBinder>
              <IceFormError name="notice" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              邮件：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder
                type="email"
                name="email"
                required
                message="请输入正确的邮件"
              >
                <Input
                  className={styles.inputItem}
                  placeholder="ice-admin@alibaba-inc.com"
                />
              </IceFormBinder>
              <IceFormError name="email" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              网站地址 ：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder
                type="url"
                name="siteUrl"
                required
                message="请输入正确的网站地址"
              >
                <Input
                  className={styles.inputItem}
                  type="url"
                  placeholder="https://alibaba.github.io/ice"
                />
              </IceFormBinder>
              <IceFormError
                style={{ marginLeft: 10 }}
                name="siteUrl"
                required
                message="请输入正确的网站地址"
              />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              Github：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder
                type="url"
                name="githubUrl"
                required
                message="请输入正确的 Github 地址"
              >
                <Input
                  className={styles.inputItem}
                  placeholder="https://github.com/alibaba/ice"
                />
              </IceFormBinder>
              <IceFormError name="githubUrl" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              Twitter：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder
                type="url"
                name="twitterUrl"
                required
                message="请输入正确的 Twitter 地址"
              >
                <Input
                  className={styles.inputItem}
                  placeholder="https://twitter.com"
                />
              </IceFormBinder>
              <IceFormError name="twitterUrl" />
            </Col>
          </Row>

          <Row className={styles.formItem}>
            <Col xxs="6" s="3" l="3" className={styles.label}>
              自我描述：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="description">
                <Input
                  className={styles.inputItem}
                  multiple
                  placeholder="请输入描述..."
                />
              </IceFormBinder>
              <IceFormError name="description" />
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>

      <Row className={styles.rowMargin}>
        <Col offset="3">
          <Button
            type="primary"
            className={styles.buttonWidth}
            onClick={validateAllFormField}
          >
            更新设置
          </Button>
        </Col>
      </Row>
    </IceContainer>
  );
}
