import React, { useState } from 'react';
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

export default function SettingsForm() {
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

  function formChange(formValue) {
    console.log('formValue', formValue);
    setValue(formValue);
  }
  function handleSubmit(values, errors) {
    console.log('error', errors, 'values', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  }

  return (
    <div className="settings-form">
      <IceContainer>
        <Form
          value={value}
          onChange={formChange}
        >
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>基本设置</h2>

            <FormItem size="large" label="姓名：" {...formItemLayout} required maxLength={10} requiredMessage="必填">
              <Input name="name" placeholder="淘小宝" />
            </FormItem>
            <FormItem label="头像：" {...formItemLayout} required requiredMessage="必填">
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
            <FormItem label="性别：" {...formItemLayout} required requiredMessage="必填">
              <RadioGroup name="gender">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </RadioGroup>
            </FormItem>

            <FormItem label="通知：" {...formItemLayout}>
              <Switch name="notice" />
            </FormItem>
            <FormItem size="large" label="邮件：" {...formItemLayout} required requiredMessage="请输入正确的邮件">
              <Input
                htmlType="email"
                name="email"
              />
            </FormItem>
            <FormItem size="large" label="网站地址：" {...formItemLayout} required formatMessage="请输入正确的网站地址" format="url">
              <Input
                name="siteUrl"
                type="url"
                placeholder="https://alibaba.github.io/ice"
              />
            </FormItem>

            <FormItem size="large" label="Github：" {...formItemLayout} required formatMessage="请输入正确的 Github 地址" format="url">
              <Input
                type="url"
                name="githubUrl"
                placeholder="https://github.com/alibaba/ice"
              />
            </FormItem>

            <FormItem size="large" label="Twitter：" {...formItemLayout} required formatMessage="请输入正确的 Twitter 地址" format="url">
              <Input name="twitterUrl" placeholder="https://twitter.com" />
            </FormItem>

            <FormItem size="large" label="自我描述：" {...formItemLayout}>
              <Input.TextArea placeholder="请输入描述..." />
            </FormItem>
            <Row className={styles.row}>
              <Col offset="3">
                <Form.Submit
                  size="large"
                  type="primary"
                  className={styles.submitFrom}
                  validate
                  onClick={handleSubmit}
                >
                提 交
                </Form.Submit>
              </Col>
            </Row>
          </div>
        </Form>
      </IceContainer>
    </div>
  );
}
