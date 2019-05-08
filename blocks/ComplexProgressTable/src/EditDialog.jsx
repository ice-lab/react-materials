import React, { Component } from 'react';
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

class EditDialog extends Component {
  static displayName = 'EditDialog';

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      value: props.value,
    };
  }

  onOk = () => {
    this.refForm.validateAll((errors, values) => {
      if (errors) {
        return;
      }
      if (typeof this.props.onOk === 'function') {
        this.props.onOk(values);
      }
    });
  };

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <Dialog
        className={styles.dialog}
        autoFocus={false}
        footerAlign="center"
        title="修改项目进度"
        {...this.props}
        onOk={this.onOk}
        isFullScreen
        visible={this.state.visible}
      >
        <IceFormBinderWrapper
          ref={(ref) => {
            this.refForm = ref;
          }}
          value={this.state.value}
          onChange={this.onFormChange}
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
}



export default CreateFuncDialog(EditDialog);
