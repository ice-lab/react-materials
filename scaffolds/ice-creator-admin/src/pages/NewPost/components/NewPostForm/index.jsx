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
  Upload,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { withRouter } from 'react-router-dom';
import styles from './index.module.scss';
const { Option } = Select;
const { Group: RadioGroup } = Radio;


@withRouter
export default class NewPostForm extends Component {
  static displayName = 'NewPostForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'pending',
        cover: [{
          uid: '0',
          name: 'IMG.png',
          state: 'done',
          url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        }],
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
      this.props.history.push('/post/list');
    });
  };

  render() {
    return (
      <IceContainer >
        <div className={styles.title}>发布作品</div>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>作品名称</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="作品名称不能为空"
                name="name"
              >
                <Input
                  placeholder="请输入作品名称"
                  size="large"
                  className={styles.width}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="name" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>作品简介</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="作品简介不能为空"
                name="desc"
              >
                <Input.TextArea
                  placeholder="请输入作品简介"
                  size="large"
                  className={styles.width}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="desc" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>作品类别</div>
              <IceFormBinder name="cate">
                <Select
                  placeholder="请选择"
                  mode="multiple"
                  size="large"
                  className={styles.width}
                >
                  <Option value="car">汽车</Option>
                  <Option value="finance">金融</Option>
                  <Option value="other">其他</Option>
                </Select>
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>发布作者</div>
              <IceFormBinder
                required
                triggerType="onBlur"
                message="发布作者不能为空"
                name="author"
              >
                <Input
                  placeholder="请输入"
                  size="large"
                  className={styles.width}
                />
              </IceFormBinder>
              <div className={styles.formError}>
                <IceFormError name="author" />
              </div>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>封面图</div>
              <IceFormBinder name="cover">
                <Upload.Card
                  listType="card"
                  action="//www.easy-mock.com/mock/5b960dce7db69152d06475bc/ice/upload" // 该接口仅作测试使用，业务请勿使用
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>发布时间</div>
              <IceFormBinder name="time">
                <DatePicker
                  size="large"
                  className={styles.width}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>状态</div>
              <IceFormBinder name="status">
                <RadioGroup
                  dataSource={[
                    {
                      value: 'charge',
                      label: '免费',
                    },
                    {
                      value: 'free',
                      label: '收费',
                    },
                  ]}
                />
              </IceFormBinder>
            </div>
            <p className={styles.tips}>
              提醒：若选择“收费”状态的话，请确认已开通个人创作者账户
            </p>
            <Button
              type="primary"
              size="large"
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


