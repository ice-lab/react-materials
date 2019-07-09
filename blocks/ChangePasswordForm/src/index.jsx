import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Form } from '@alifd/next';

import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 7, s: 4, l: 3 },
  wrapperCol: { xxs: 16, s: 10, l: 7 },
};

export default function Index() {
  const [value, setValue] = useState({
    passwd: '',
    rePasswd: '',
  });

  const checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入新密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  const checkPasswd2 = (rule, values, callback, stateValues) => {
    console.log('stateValues:', stateValues);
    if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  const formChange = (value) => {
    setValue(value);
  };

  const validateAllFormField = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  return (
    <div className="change-password-form">
      <IceContainer>
        <Form
          value={value}
          onChange={formChange}
          size="large"
        >
          <div  className={styles.formContent}>
            <h2 className={styles.formTitle}>修改密码</h2>
            <FormItem
              label="新密码："
              {...formItemLayout}
              validator={checkPasswd}
            >
              <Input
                name="passwd"
                htmlType="password"
                size="large"
                placeholder="请重新输入新密码"
              />
            </FormItem>
            <FormItem
              label="确认密码："
              {...formItemLayout}
              validator={(rule, values, callback) =>
                checkPasswd2(rule, values, callback, value)
              }
            >
              <Input
                name="rePasswd"
                htmlType="password"
                size="large"
                placeholder="两次输入密码保持一致"
              />
            </FormItem>
          </div>

          <Row wrap className="rowMarginTop">
            <Col xxs={{ offset: 6 }} s={{ offset: 3 }}>
              <Form.Submit
                size="large"
                validate
                type="primary"
                onClick={validateAllFormField}
              >
                提 交
              </Form.Submit>
            </Col>
          </Row>
        </Form>
      </IceContainer>
    </div>
  );
}
