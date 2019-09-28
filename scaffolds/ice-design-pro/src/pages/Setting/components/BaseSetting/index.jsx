import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Upload, Grid, Form } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 },
};

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

export default injectIntl((props) => {
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

  function formChange(val) {
    setValue(val);
  }

  function validateAllFormField(values, errors) {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  }

  const {
    intl: { formatMessage },
  } = props;
  return (
    <div className="settings-form">
      <IceContainer>
        <Form value={value} onChange={formChange}>
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>
              <FormattedMessage id="app.setting.pagetitle" />
            </h2>

            <FormItem
              label={formatMessage({ id: 'app.setting.name' })}
              {...formItemLayout}
              required
              maxLength={10}
              requiredMessage={formatMessage({
                id: 'app.setting.name.message',
              })}
            >
              <Input name="name" placeholder="taoxiaobao" />
            </FormItem>
            <FormItem
              label={formatMessage({ id: 'app.setting.avatar' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.avatar.message',
              })}
            >
              <Upload.Card
                name="avatar"
                listType="card"
                action=""
                accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                beforeUpload={beforeUpload}
                onChange={onChange}
                onSuccess={onSuccess}
                onError={onError}
              />
            </FormItem>
            <FormItem
              label={formatMessage({ id: 'app.setting.gender' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.gender.message',
              })}
            >
              <RadioGroup name="gender">
                <Radio value="male">
                  <FormattedMessage id="app.setting.male" />
                </Radio>
                <Radio value="female">
                  <FormattedMessage id="app.setting.female" />
                </Radio>
              </RadioGroup>
            </FormItem>

            <FormItem
              label={formatMessage({ id: 'app.setting.notification' })}
              {...formItemLayout}
            >
              <Switch name="notice" />
            </FormItem>
            <FormItem
              label={formatMessage({ id: 'app.setting.email' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.email.message',
              })}
            >
              <Input htmlType="email" name="email" />
            </FormItem>
            <FormItem
              label={formatMessage({ id: 'app.setting.website' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.website.message',
              })}
              format="url"
            >
              <Input
                name="siteUrl"
                type="url"
                placeholder="https://alibaba.github.io/ice"
              />
            </FormItem>

            <FormItem
              label={formatMessage({ id: 'app.setting.github' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.github.message',
              })}
              format="url"
            >
              <Input
                type="url"
                name="githubUrl"
                placeholder="https://github.com/alibaba/ice"
              />
            </FormItem>

            <FormItem
              label={formatMessage({ id: 'app.setting.twitter' })}
              {...formItemLayout}
              required
              requiredMessage={formatMessage({
                id: 'app.setting.twitter.message',
              })}
              format="url"
            >
              <Input name="twitterUrl" placeholder="https://twitter.com" />
            </FormItem>

            <FormItem
              label={formatMessage({ id: 'app.setting.description' })}
              {...formItemLayout}
            >
              <Input.TextArea placeholder="请输入描述..." />
            </FormItem>
            <Row style={{ marginTop: 20 }}>
              <Col offset="3">
                <Form.Submit
                  type="primary"
                  style={{ width: 100 }}
                  validate
                  onClick={validateAllFormField}
                >
                  <FormattedMessage id="app.setting.submit" />
                </Form.Submit>
              </Col>
            </Row>
          </div>
        </Form>
      </IceContainer>
    </div>
  );
});

