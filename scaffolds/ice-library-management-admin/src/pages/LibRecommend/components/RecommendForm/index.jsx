/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Option } = Select;

export default class RecommendForm extends Component {
  static displayName = 'RecommendForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
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
        <div className={styles.title}>图书推荐</div>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>图书名称</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="图书名称不能为空"
                name="bookName"
              >
                <Input
                  placeholder="请输入图书名称"
                  className={styles.inputWidth}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="bookName" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>出版社</div>
              <IceFormBinder name="publisher">
                <Input
                  placeholder="图书出版社"
                  className={styles.inputWidth}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>作者</div>
              <IceFormBinder name="author">
                <Input
                  placeholder="图书作者"
                  className={styles.inputWidth}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>参考价格</div>
              <IceFormBinder name="price">
                <Input
                  placeholder="请输入数字"
                  className={styles.inputWidth}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>书目类别</div>
              <IceFormBinder name="cate">
                <Select
                  placeholder="请选择"
                  mode="multiple"
                  className={styles.inputWidth}
                >
                  <Option value="technology">技术领域</Option>
                  <Option value="professional">专业领域</Option>
                  <Option value="management">管理沟通</Option>
                  <Option value="other">其他</Option>
                </Select>
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>推荐人</div>
              <IceFormBinder name="referrer">
                <Input
                  placeholder="请输入数字"
                  className={styles.inputWidth}
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


