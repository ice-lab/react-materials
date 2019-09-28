import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Radio,
  Switch,
  Upload,
  Grid,
  Message,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;


function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

function formChange(value) {
  console.log('value', value);
}


export default function SettingsForm() {
  /* eslint-disable */
  const [value, setValue] = useState({
    name: '',
    gender: 'male',
    notice: false,
    email: '',
    avatar: [],
    siteUrl: '',
    githubUrl: '',
    twitterUrl: '',
    description: '',
  });
  /* eslint-enable */

  const formRef = React.createRef();

  const validateAllFormField = () => {
    formRef.current.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      console.log(values);
      Message.success('提交成功');
    });
  };

  return (
    <div className={styles.SettingsForm}>
      <IceContainer>
        <IceFormBinderWrapper
          value={value}
          onChange={formChange}
          ref={formRef}
        >
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>基本设置</h2>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                姓名：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder name="name" required max={10} message="必填">
                  <Input placeholder="于江水" />
                </IceFormBinder>
                <IceFormError name="name" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                头像：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder name="avatar" required message="必填">
                  <Upload.Card
                    listType="card"
                    action=""
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                    beforeUpload={beforeUpload}
                    onChange={onChange}
                    onSuccess={onSuccess}
                    onError={onError}
                  />
                </IceFormBinder>
                <IceFormError name="avatar" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                性别：
              </Col>
              <Col xxs="16" s="10" l="6">
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
              <Col xxs="6" s="4" l="3" className={styles.label}>
                通知：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder type="boolean" name="notice">
                  <Switch />
                </IceFormBinder>
                <IceFormError name="notice" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                邮件：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  type="email"
                  name="email"
                  required
                  message="请输入正确的邮件"
                >
                  <Input
                    placeholder="ice-admin@alibaba-inc.com"
                  />
                </IceFormBinder>
                <IceFormError name="email" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                website ：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  type="url"
                  name="siteUrl"
                  required
                  message="请输入正确的网站地址"
                >
                  <Input
                    type="url"
                    placeholder="https://alibaba.github.io/ice"
                  />
                </IceFormBinder>
                <IceFormError name="siteUrl" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                Github：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  type="url"
                  name="githubUrl"
                  required
                  message="请输入正确的 Github 地址"
                >
                  <Input
                    placeholder="https://github.com/alibaba/ice"
                  />
                </IceFormBinder>
                <IceFormError name="githubUrl" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                Twitter：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder
                  type="url"
                  name="twitterUrl"
                  required
                  message="请输入正确的 Twitter 地址"
                >
                  <Input placeholder="https://twitter.com" />
                </IceFormBinder>
                <IceFormError name="twitterUrl" />
              </Col>
            </Row>

            <Row className={styles.formItem}>
              <Col xxs="6" s="4" l="3" className={styles.label}>
                自我描述：
              </Col>
              <Col xxs="16" s="10" l="6">
                <IceFormBinder name="description">
                  <Input.TextArea placeholder="请输入描述..." />
                </IceFormBinder>
                <IceFormError name="description" />
              </Col>
            </Row>
          </div>
        </IceFormBinderWrapper>

        <Row className={styles.width}>
          <Col offset="3">
            <Button
              type="primary"
              className={styles.width2}
              onClick={validateAllFormField}
            >
              提 交
            </Button>
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
