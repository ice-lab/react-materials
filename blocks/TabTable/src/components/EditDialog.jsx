import React, { useState } from 'react';
import { Dialog, Button, Form, Input, Field } from '@alifd/next';

const FormItem = Form.Item;

const field = new Field({});
const init = field.init;

export default function EditDialog(props) {
  const { index, record } = props;
  const [visible, setVisible] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);

  const handleSubmit = () => {
    field.validate((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }

      props.getFormValues(dataIndex, values);
      setVisible(false);
    });
  };

  const onOpen = (index, record) => {
    field.setValues({ ...record });
    setVisible(true);
    setDataIndex(index);
  };

  const onClose = () => {
    setVisible(false);
  };

  const formItemLayout = {
    labelCol: {
      fixedSpan: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <div style={styles.editDialog}>
      <Button
        size="small"
        type="primary"
        onClick={() => onOpen(index, record)}
      >
        编辑
      </Button>
      <Dialog
        style={{ width: 640 }}
        visible={visible}
        onOk={handleSubmit}
        closeable="esc,mask,close"
        onCancel={onClose}
        onClose={onClose}
        title="编辑"
      >
        <Form field={field}>
          <FormItem label="标题：" {...formItemLayout}>
            <Input
              {...init('title', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>

          <FormItem label="作者：" {...formItemLayout}>
            <Input
              {...init('author', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>

          <FormItem label="状态：" {...formItemLayout}>
            <Input
              {...init('status', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>

          <FormItem label="发布时间：" {...formItemLayout}>
            <Input
              {...init('date', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>
        </Form>
      </Dialog>
    </div>
  );
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
};
