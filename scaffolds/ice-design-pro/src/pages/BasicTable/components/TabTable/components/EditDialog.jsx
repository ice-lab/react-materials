import React, { useState } from 'react';
import { Dialog, Button, Form, Input, Field } from '@alifd/next';
import { FormattedMessage } from 'react-intl';

const FormItem = Form.Item;

const field = new Field({});
const init = field.init;
const formItemLayout = {
  labelCol: {
    fixedSpan: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

export default function EditDialog(props) {
  const { index, record } = props;
  const [dialogVisible, setVisible] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);
  const [formData, setFormData] = useState({});

  function handleSubmit() {
    field.validate((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }

      props.getFormValues(dataIndex, values);
      setVisible(false);
    });
  }

  function onOpen(openIndex, openRecord) {
    field.setValues({ ...openRecord });
    setVisible(true);
    setDataIndex(openIndex);
  }

  function onClose() {
    setVisible(false);
  }

  function onChange(value) {
    setFormData(value);
  }

  return (
    <div style={styles.editDialog}>
      <Button type="primary" onClick={() => onOpen(index, record)}>
        <FormattedMessage id="app.base.table.btn.edit" />
      </Button>
      <Dialog
        style={{ width: 640 }}
        visible={dialogVisible}
        onOk={handleSubmit}
        closeable="esc,mask,close"
        onCancel={onClose}
        onClose={onClose}
        title="编辑"
      >
        <Form field={field} onChange={onChange} value={formData}>
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
