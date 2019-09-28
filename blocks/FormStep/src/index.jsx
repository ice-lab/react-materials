import React, { useState } from 'react';
import { Form, Field } from '@ice/form';
import { Step, Input, Button, Switch, Select, Checkbox } from '@alifd/next';

const Option = Select.Option;

export default function FormStep() {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  const goToNext = (values) => {
    setFormValues({...formValues, ...values});
    setStep(step + 1);
  };

  const onSubmit = (values) => {
    const allValues = {...formValues, ...values};
    /* eslint-disable */
    window.alert(JSON.stringify(allValues, 0, 2))
    /* eslint-enable */
  }

  const layout = {
    labelCol: 3,
  }

  const Form0 = (
    <Form
      onSubmit={goToNext}
      layout={layout}
      initialValues={{
        username: 'icer',
        age: 3,
        intro: '让前端开发简单而友好',
      }}
    >
      <Field label="姓名：" name="username" component={Input} placeholder="请输入名字" />
      <Field label="年龄：" name="age" component={Input} htmlType="number" placeholder="请输入年龄" />
      <Field label="简介：" name="intro" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
      <Field label="">
        <Button type="primary" htmlType="submit">下一步</Button>
      </Field>
    </Form>
  );

  const Form1 = (
    <Form 
      layout={layout}
      onSubmit={goToNext}
    >
      <Field label="开关：" name="open" component={Switch} valueName="checked" />
      <Field label="尺寸：" name="size" component={Select} value="medium" placeholder="请选择尺寸">
        <Option value="small" key="small">小</Option>
        <Option value="medium" key="medium">中</Option>
        <Option value="large" key="large">大</Option>
      </Field>
      <Field label="选项：" name="checkbox" value={['b']} component={Checkbox.Group}>
        <Checkbox value="a">选项一</Checkbox>
        <Checkbox value="b">选项二</Checkbox>
        <Checkbox disabled value="c">选项三（disabled）</Checkbox>
      </Field>
      <Field label="">
        <Button type="primary" htmlType="submit">下一步</Button>
      </Field>
    </Form>
  )

  const Form2 = (
    <Form
      layout={layout}
      onSubmit={onSubmit}
    >
      <Field label="手机：" name="tel" component={Input} htmlType="number" placeholder="请输入手机号" />
      <Field label="邮件：" name="email" component={Input} placeholder="请输入邮件" />
      <Field label="地址：" name="addr" component={Input} placeholder="请输入地址" />
      <Field label="">
        <Button type="primary" htmlType="submit">完成</Button>
      </Field>
    </Form>
  );

  return (
    <div className="simple-fluency-form">
      <Step current={step} shape="dot">
        <Step.Item key={0} title="Step1" />
        <Step.Item key={1} title="Step2" />
        <Step.Item key={2} title="Step3" />
      </Step>
      { step === 0 && Form0 }
      { step === 1 && Form1 }
      { step === 2 && Form2 }
    </div>
  );
}
