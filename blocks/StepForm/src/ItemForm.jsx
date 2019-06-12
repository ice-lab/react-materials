import React, { Component } from 'react';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { Input, Button, Select, Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class ItemForm extends Component {
  static displayName = 'ItemForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        title: '',
        price: '',
        desc: '',
        type: '',
      },
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  submit = () => {
    this.formRef.validateAll((error, value) => {
      console.log(value);
      if (!error || error.length === 0) {
        this.props.onSubmit();
      }
    });
  };

  render() {
    return (
      <IceFormBinderWrapper
        ref={(formRef) => {
          this.formRef = formRef;
        }}
        value={this.state.value}
        onChange={this.onFormChange}
      >
        <div>
          <h3 className={styles.formTitle}>商品信息</h3>
          <Row className={styles.formItem}>
            <Col xxs="6" s="4" l="3" className={styles.formLabel}>
              宝贝标题：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="title">
                <Input
                  required
                  placeholder="请输入宝贝标题"
                  message="宝贝标题必须填写"
                  className={styles.babyTltle}
                />
              </IceFormBinder>
              <IceFormError name="title" />
            </Col>
          </Row>
          <Row className={styles.formItem}>
            <Col xxs="6" s="4" l="3" className={styles.formLabel}>
              商品类型：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="type">
                <Select
                  className="next-form-text-align"
                  required
                  className={styles.goodsTypoe}
                  message="请选择商品类型"
                  dataSource={[
                    { label: '全新', value: 'new' },
                    { label: '二手', value: 'secondhand' },
                  ]}
                />
              </IceFormBinder>
              <IceFormError name="type" />
            </Col>
          </Row>
          <Row className={styles.formItem}>
            <Col xxs="6" s="4" l="3" className={styles.formLabel}>
              宝贝价格：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="price">
                <Input
                  required
                  placeholder="请输入宝贝价格"
                  message="宝贝价格必须填写"
                />
              </IceFormBinder>
              <IceFormError name="price" />
            </Col>
          </Row>
          <Row>
            <Col xxs="6" s="4" l="3" className={styles.formLabel}>
              宝贝描述：
            </Col>
            <Col s="12" l="10">
              <IceFormBinder name="desc">
                <Input.TextArea className={styles.describle} />
              </IceFormBinder>
            </Col>
          </Row>
          <Row>
            <Col offset={3} className={styles.btns}>
              <Button onClick={this.submit} type="primary">
                下一步
              </Button>
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>
    );
  }
}

