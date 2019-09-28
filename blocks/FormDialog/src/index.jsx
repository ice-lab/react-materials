import React, { useState } from 'react';
import { Form, Field } from '@ice/form';
import { Input, Button, Dialog, Switch } from '@alifd/next';

export default function FormDialog() {
  let handleSubmit = null;
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onOk = (e) => {
    handleSubmit(e);
  };

  const onSubmit = (values) => {
    /* eslint-disable */
    window.alert(JSON.stringify(values, 0, 2));
    /* eslint-enable */
  }

  return (
    <div>
      <Button onClick={onOpen} type="primary">
        open form dialog
      </Button>
      <Dialog
        title="表单 Form 对话框"
        visible={visible}
        onOk={onOk}
        onCancel={onClose}
        onClose={onClose}
        style={{
          width: 600,
        }}
      >
        <Form 
          onSubmit={onSubmit}
          layout={{
            labelCol: 3,
            wrapperCol: 8,
          }}
        >
          {formCore => {
            handleSubmit = formCore.submit.bind(formCore);
            return (
              <div>
                <Field name="name" label="名称：" component={Input} placeholder="请输入名字" />
                <Field name="age" label="年龄：" component={Input} placeholder="请输入年龄" />
                <Field name="desc" label="简介：" component={Input.TextArea} placeholder="请简单介绍一下自己的工作经历" />
                <Field name="open" label="是否打开：" component={Switch} valueName="checked" value />
                <Field name="openDesc" label="打开时的描述：" component={Input} placeholder="description when opening"/>
                <Field name="closeDesc" label="关闭时的描述：" component={Input} placeholder="description when closing" />
              </div>
            )
          }}
        </Form>
      </Dialog>
    </div>
  );
}