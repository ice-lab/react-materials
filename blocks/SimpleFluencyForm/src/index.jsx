import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Step, Input, Button, Form } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 5, s: 5, l: 7 },
  wrapperCol: { s: 14, l: 12 },
};


export default function SimpleFluencyForm() {
  const [step, setStep] = useState(0);

  const formChange = (values, field) => {
    console.log(values, field);
  };

  const nextStep = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      setStep(step + 1);
    } else {
      // 处理表单报错
    }
  };

  const renderStep = (step) => {
    if (step === 0) {
      return (
        <IceContainer className={styles.form}>
          <Form onChange={formChange} >
            <FormItem label="姓名：" {...formItemLayout} required requiredMessage="必填项" >
              <Input name="username" autoComplete="on" />
            </FormItem>
            <FormItem label="邮箱：" {...formItemLayout} required formatMessage="邮箱不合法" format="email">
              <Input name="email" htmlType="email" autoComplete="on" />
            </FormItem>
            <FormItem label="电话：" {...formItemLayout} required formatMessage="请输入合法的电话号码" format="tel">
              <Input name="phone" />
            </FormItem>
            <FormItem label="地址：" {...formItemLayout} required requiredMessage="必填" >
              <Input.TextArea name="address" />
            </FormItem>
            <FormItem {...formItemLayout} label=" ">
              <Form.Submit onClick={nextStep} validate type="primary">下一步</Form.Submit>
            </FormItem>
          </Form>
        </IceContainer>
      );
    } else if (step === 1) {
      return (
        <IceContainer>
          <div>步骤二</div>
          <Button onClick={nextStep} type="primary">下一步</Button>
        </IceContainer>
      );
    } else if (step === 2) {
      return (
        <IceContainer>
          <div>步骤三</div>
          
          <Button onClick={nextStep} type="primary">下一步</Button>
        </IceContainer>
      );
    }
  };

  return (
    <div className="simple-fluency-form">
      <IceContainer>
        <Step current={step} shape="dot">
          <Step.Item key={0} title="填写信息" />
          <Step.Item key={1} title="确认信息" />
          <Step.Item key={2} title="完成" />
        </Step>
      </IceContainer>
      {renderStep(step)}
    </div>
  );
}
