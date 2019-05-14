import React from 'react';
import {
  Input,
  Button,
  Select,
} from '@alifd/next';
import {
  FormBinderWrapper, FormBinder, FormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss'

export default class CreateFrom extends React.Component {
  static defaultProps = {
    onCreateSubmitSuccess: () => {},
    onCreateSubmitCancel: () => {},
  };

  state = {
    formValue: {},
    submitting: false,
  }

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  onCancel = () => {
    this.props.onSubmitCancel();
  };

  onSubmit = () => {
    const { submitting } = this.state;

    if (submitting) {
      return;
    }

    this.setState({
      submitting: true,
    });
    this.formRef.current.validateFields((errors, values) => {
      if (!errors) {
        console.log('submit', values);
        setTimeout(() => {
          this.setState({
            submitting: false,
          }, () => {
            this.props.onSubmitSuccess(values);
          });
        }, 1 * 1000);
      } else {
        this.setState({
          submitting: false,
        });
      }
    });
  }

  render() {
    return (
      <FormBinderWrapper
        ref={this.formRef}
        value={this.state.formValue}
        onChange={(value) => {
          this.setState({
            formValue: value,
          });
        }}
      >
        <div className={styles.formContainer}>
          <div className={styles.formItem}>
            <label htmlFor="id" className={styles.formLabel}>编号：<span style={{ color: 'red' }}>*</span></label>
            <FormBinder name="id" required message="请选择编号">
              <Select
                id="id"
                dataSource={[
                  { label: '123', value: '123' },
                  { label: '456', value: '456' },
                  { label: '789', value: '789' },
                ]}
              />
            </FormBinder>
            <FormError name="id" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="name" className={styles.formLabel}>合同名称：</label>
            <FormBinder name="name">
              <Input id="name" placeholder="请输入合同名称" />
            </FormBinder>
            <FormError name="name" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="ourCompany" className={styles.formLabel}>我方公司：</label>
            <FormBinder name="ourCompany">
              <Input id="ourCompany" placeholder="请输入" />
            </FormBinder>
            <FormError name="ourCompany" />
          </div>

          <div className={styles.formActions}>
            <Button onClick={this.onCancel} className={styles.lbtn}>取消</Button>
            <Button onClick={this.onSubmit} type="primary" loading={this.state.submitting}>提交</Button>
          </div>
        </div>
      </FormBinderWrapper>
    );
  }
}
