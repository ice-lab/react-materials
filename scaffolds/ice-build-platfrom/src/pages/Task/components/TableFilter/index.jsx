/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Button, Select, Input, Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';
import styles from './index.module.scss';

export default class TableFilter extends Component {
  state = {
    value: {},
  };

  handleSubmit = () => {
    const { validateFields } = this.refs.form;
    validateFields((errors, values) => {
      if (errors) {
        Message.error('查询参数错误');
        return;
      }
      this.props.handleSubmit(values);
    });
  };

  render() {
    return (
      <FormBinderWrapper value={this.state.value} ref="form">
        <div className={styles.tableFilter}>
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>仓库：</span>
            <FormBinder name="repo">
              <Input placeholder="请输入仓库名" />
            </FormBinder>
          </div>

          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>构建器：</span>
            <FormBinder name="builder">
              <Input placeholder="请输入构建器名" />
            </FormBinder>
          </div>

          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>用户：</span>
            <FormBinder name="user">
              <Input placeholder="请输入用户名" />
            </FormBinder>
          </div>

          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>Client：</span>
            <FormBinder name="client">
              <Select>
                <Select.Option value="travis">Travis CI</Select.Option>
                <Select.Option value="jenkins">Jenkins</Select.Option>
              </Select>
            </FormBinder>
          </div>

          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>状态：</span>
            <FormBinder name="status">
              <Select>
                <Select.Option value="all">全部</Select.Option>
                <Select.Option value="success">成功</Select.Option>
                <Select.Option value="failed">失败</Select.Option>
              </Select>
            </FormBinder>
          </div>
          <Button
            type="primary"
            className={styles.submitButton}
            onClick={this.handleSubmit}
          >
            查询
          </Button>
        </div>
      </FormBinderWrapper>
    );
  }
}

