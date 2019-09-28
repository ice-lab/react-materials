import React, { useState } from 'react';
import { Form, Field } from '@ice/form';
import { Dialog, Button, Input } from '@alifd/next';
import styles from './index.module.scss';

export default function EditDialog(props) {
  const [visible, setVisible] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);
  const [initialValues, setInitialValues] = useState({});

  let handleSubmit = null;

  const onSubmit = (values) => {
    console.log(values, dataIndex);
    setVisible(false);
    props.getFormValues(dataIndex, values);
  };

  const onOpen = (index, record) => {
    setInitialValues(record);
    setVisible(true);
    setDataIndex(index);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { index, record } = props;

  return (
    <div className={styles.editDialog}>
      <Button type="primary" onClick={() => onOpen(index, record)}>
        编辑
      </Button>
      <Dialog
        className={styles.w}
        visible={visible}
        onOk={e => handleSubmit(e)}
        closeable="esc,mask,close"
        onCancel={onClose}
        onClose={onClose}
        title="编辑"
      >
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          layout={{
            wrapperCol: 10,
          }}
        >
          {(formCore) => {
            handleSubmit = formCore.submit.bind(formCore);
            return (
              <React.Fragment>
                <Field label="用户名：" name="username" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="邮箱：" name="email" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="用户组：" name="group" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="文章数：" disabled name="articleNum" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="评论数：" disabled name="commentNum" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="注册时间：" disabled name="regTime" component={Input} rules={{ required: true, message: '必填选项' }} />
                <Field label="最后登录时间：" disabled name="LastLoginTime" component={Input} rules={{ required: true, message: '必填选项' }} />
              </React.Fragment>
            );
          }}
        </Form>
      </Dialog>
    </div>
  );
}
