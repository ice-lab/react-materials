import React, { useState } from 'react';
import { Dialog, Input, Select, Grid } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import DialogDecorator from './DialogDecorator';
import styles from './index.module.scss';

const { Col, Row } = Grid;

const typeData = [
  { label: '清单', value: '清单' },
  { label: '单品', value: '单品' },
];

function FormDialog(props) {
  const [visible] = useState(props.visible);
  const [value, setValue] = useState(props.value);

  const onFormChange = (value) => {
    setValue(value);
  };

  const onOkHandler = () => {
    props.onOk && props.onOk(value);
  };

  return (
    <Dialog
      title="编辑数据"
      onClose={props.onClose}
      onCancel={props.onCancel}
      afterClose={props.afterClose}
      onOk={onOkHandler}
      visible={visible}
      className={styles.dialogWidth}
    >
      <IceFormBinderWrapper
        value={value}
        onChange={onFormChange}
      >
        <div>
          <Row>
            <Col span={4}>
              <span className={styles.label}>标题</span>
            </Col>
            <Col span={18}>
              <IceFormBinder
                required
                max={20}
                name="title"
                message="当前标题必填"
              >
                <Input className={styles.formField} />
              </IceFormBinder>
              <IceFormError name="title" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={4}>
              <span className={styles.label}>类型</span>
            </Col>
            <Col span={18}>
              <IceFormBinder name="type">
                <Select dataSource={typeData} className={styles.formField} />
              </IceFormBinder>
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>
    </Dialog>
  );
}

export default DialogDecorator(FormDialog);
