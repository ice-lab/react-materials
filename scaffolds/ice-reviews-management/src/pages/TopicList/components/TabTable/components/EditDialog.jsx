import React, { useState } from 'react';
import { Dialog, Button, Form, Input, Field } from '@alifd/next';

const FormItem = Form.Item;
const field = new Field({});
const init = field.init;

export default function EditDialog(props) {
  const [visible, setVisible] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);
  const [formData, setFormData] = useState({});

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
    console.log(record);
    field.setValues({ ...record });
    setVisible(true);
    setDataIndex(index);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (value) => {
    setFormData(value);
  };

  const { index, record } = props;
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
      <Button type="primary" onClick={() => onOpen(index, record)}>
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
        <Form field={field} onChange={onChange} value={formData}>
          <FormItem label="话题" {...formItemLayout}>
            <Input
              {...init('title', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>

          <FormItem label="创建人：" {...formItemLayout}>
            <Input
              {...init('name', {
                rules: [{ required: true, message: '必填选项' }],
              })}
            />
          </FormItem>

          <FormItem label="评测人数：" {...formItemLayout}>
            <Input
              disabled
              {...init('num', {
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

EditDialog.displayName = 'EditDialog';
