/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Message,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

export default class RecommendForm extends Component {
  static displayName = 'RecommendForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'borrow',
      },
    };
  }

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log({ errors });
      }
      console.log({ values });
      Message.success('提交成功');
    });
  };

  render() {
    return (
      <IceContainer>
        <div className={styles.title}>图书借阅</div>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>图书名称</div>
              <IceFormBinder name="bookName">
                <Select
                  placeholder="请选择"
                  mode="multiple"
                  className={styles.selectWidth}
                >
                  <Option value="book1">史蒂夫·乔布斯传</Option>
                  <Option value="book2">大数据供应链</Option>
                  <Option value="book3">深度学习</Option>
                  <Option value="book4">裂变</Option>
                  <Option value="book5">归属感</Option>
                  <Option value="book6">沉默的大多数</Option>
                </Select>
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>借阅/归还</div>
              <IceFormBinder name="status">
                <RadioGroup
                  dataSource={[
                    {
                      value: 'borrow',
                      label: '借阅',
                    },
                    {
                      value: 'return',
                      label: '归还',
                    },
                  ]}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>借阅证</div>
              <IceFormBinder name="idNumber">
                <Input
                  placeholder="请输入借阅证号码"
                  className={styles.selectWidth}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>借阅时间</div>
              <IceFormBinder name="time">
                <DatePicker
                  className={styles.selectWidth}
                />
              </IceFormBinder>
            </div>
            <Button
              type="primary"
              className={styles.submitButton}
              onClick={this.validateAllFormField}
            >
              提 交
            </Button>
          </div>
        </IceFormBinderWrapper>
      </IceContainer>
    );
  }
}


