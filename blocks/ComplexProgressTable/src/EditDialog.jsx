import React, { useState, useRef } from 'react';
import { Dialog, Grid, Input, Radio, Range } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import CreateFuncDialog from './CreateFuncDialog';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;

function EditDialog(props) {
  const [visible] = useState(props.visible);
  const [value, setValue] = useState(props.value);
  const formRef = useRef(null);

  const onOk = () => {
    formRef.current.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      if (typeof props.onOk === 'function') {
        props.onOk(values);
      }
    });
  };

  const onFormChange = (value) => {
    setValue(value);
  };

  return (
    <Dialog
      className={styles.dialog}
      autoFocus={false}
      footerAlign="center"
      title="修改项目进度"
      {...props}
      onOk={onOk}
      isFullScreen
      visible={visible}
    >
      <IceFormBinderWrapper
        ref={formRef}
        value={value}
        onChange={onFormChange}
      >
        <div className={styles.dialogContent}>
          <Row className={styles.formRow}>
            <Col span="4">
              <label className={styles.formLabel}>项目标题：</label>
            </Col>
            <Col span="16">
              <IceFormBinder
                required
                min={2}
                max={26}
                message="项目标题必填，且最少 2 个字最多 26 个字"
                name="title"
              >
                <Input className={styles.input} placeholder="项目标题" />
              </IceFormBinder>
              <IceFormError name="title" />
            </Col>
          </Row>
          <Row className={styles.formRow}>
            <Col span="4">
              <label className={styles.formLabel}>项目进度：</label>
            </Col>
            <Col span="16">
              <div className={styles.progressWrapper}>
                <IceFormBinder type="number" name="progress">
                  <Range marks={[0, 100]} />
                </IceFormBinder>
              </div>
            </Col>
          </Row>
          <Row className={styles.formRow}>
            <Col span="4">
              <label className={styles.formLabel}>优先级：</label>
            </Col>
            <Col span="16">
              <IceFormBinder name="priority">
                <RadioGroup
                  dataSource={[
                    {
                      value: '高',
                      label: '高',
                    },
                    {
                      value: '中',
                      label: '中',
                    },
                    {
                      value: '低',
                      label: '低',
                    },
                  ]}
                />
              </IceFormBinder>
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>
    </Dialog>
  );
}

export default CreateFuncDialog(EditDialog);
