import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Form, Button, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import MemberPermission from '../MemberPermission';

import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

export default function AddProject() {
  const [value] = useState({});

  let formRef;
  const handleSubmit = () => {
    formRef.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return false;
      }

      Message.success('添加成功');
    });
  };

  return (
    <div className="content-editor">
      <IceFormBinderWrapper
        ref={(refInstance) => {
          formRef = refInstance;
        }}
        value={value}
      >
        <IceContainer>
          <h2 className={styles.title}>添加成员</h2>
          <Form labelAlign="top" className={styles.form}>
            <Row gutter="20" wrap>
              <Col span="8">
                <FormItem label="姓名" required>
                  <IceFormBinder name="name" required message="姓名必填">
                    <Input placeholder="请输入姓名" />
                  </IceFormBinder>
                  <IceFormError name="name" />
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="邮箱" required>
                  <IceFormBinder
                    name="email"
                    required
                    type="email"
                    message="邮箱地址必填"
                  >
                    <Input placeholder="请输入邮箱地址" />
                  </IceFormBinder>
                  <IceFormError name="email" />
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="职位" required>
                  <IceFormBinder name="jobTitle" required message="职位必填">
                    <Input placeholder="请输入职位" />
                  </IceFormBinder>
                  <IceFormError name="jobTitle" />
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="手机号码" required>
                  <IceFormBinder name="phone" required message="手机号码必填">
                    <Input placeholder="请输入手机号码" />
                  </IceFormBinder>
                  <IceFormError name="phone" />
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem label="联系地址" required>
                  <IceFormBinder
                    name="address"
                    required
                    message="联系地址必填"
                  >
                    <Input placeholder="请输入联系地址" />
                  </IceFormBinder>
                  <IceFormError name="address" />
                </FormItem>
              </Col>
              <Col span="24">
                <MemberPermission />
              </Col>
            </Row>
            <FormItem label=" ">
              <Button type="primary" onClick={handleSubmit}>
                  提交
              </Button>
            </FormItem>
          </Form>
        </IceContainer>
      </IceFormBinderWrapper>
    </div>
  );
}
