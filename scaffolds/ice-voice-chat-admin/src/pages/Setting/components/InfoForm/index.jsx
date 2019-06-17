/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Group: RadioGroup } = Radio;

export default class infoForm extends Component {
  static displayName = 'infoForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        project: 'weather',
        status: 'yes',
        appid: 'wdjwe2309ew',
        token: '2wedwjewjndfmsnjancdnsdmcnms',
        desc: '',
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
        Message.error('请输入完整的信息');
        return;
      }
      console.log({ values });
      Message.success('保存成功');
    });
  };

  render() {
    return (
      <IceContainer className={styles.container}>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className={styles.formContent}>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>项目名称</div>
              <IceFormBinder>
                <Input name="project" style={{ width: '400px' }} />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>AppId</div>
              <IceFormBinder>
                <Input
                  name="appid"
                  style={{ width: '400px' }}
                  disabled
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>Token</div>
              <IceFormBinder>
                <Input
                  name="token"
                  style={{ width: '400px' }}
                  disabled
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>允许回复</div>
              <IceFormBinder>
                <RadioGroup
                  name="status"
                  dataSource={[
                    {
                      value: 'yes',
                      label: '是',
                    },
                    {
                      value: 'no',
                      label: '否',
                    },
                  ]}
                />
              </IceFormBinder>
            </div>
            <div className={styles.formItem}>
              <div className={styles.formLabel}>项目描述</div>
              <IceFormBinder>
                <Input.TextArea
                  placeholder="这里是一段描述"
                  name="desc"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
            </div>
            <Button
              type="primary"
              className={styles.submitButton}
              onClick={this.validateAllFormField}
            >
              保 存
            </Button>
          </div>
        </IceFormBinderWrapper>
      </IceContainer>
    );
  }
}

