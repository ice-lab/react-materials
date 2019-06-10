import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Select, Grid, Form } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 8, s: 6, l: 4 },
  wrapperCol: { s: 12, l: 12 },
};

export default class Index extends Component {
  static displayName = 'Index';

  onFormChange = (values, field) => {
    console.log(values, field);
  };

  reset = () => {};

  submit = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="column-form">
        <IceContainer title="运营商录入" className={styles.container}>
          <Form onChange={this.onFormChange}>
            <div>
              <Row wrap>
                <Col xxs="24" s="12" l="12">
                  <FormItem
                    label="合同编号："
                    {...formItemLayout}
                    required
                    requiredMessage="合同编号必须填写"
                  >
                    <Input name="contractId" />
                  </FormItem>
                  <FormItem
                    label="签约运营商："
                    {...formItemLayout}
                    required
                    requiredMessage="签约运营商必须填写"
                  >
                    <Input name="operator" />
                  </FormItem>
                  <FormItem
                    label="计费周期："
                    {...formItemLayout}
                    required
                    requiredMessage="请选择计费周期"
                  >
                    <Select
                      name="period"
                      className={styles.selectWidth}
                      dataSource={[
                        { label: '按月结算', value: 'month' },
                        { label: '按季度结算', value: 'season' },
                        { label: '按年结算', value: 'year' },
                      ]}
                    />
                  </FormItem>
                </Col>

                <Col xxs="24" s="12" l="12">
                  <FormItem
                    label="结算运营商："
                    {...formItemLayout}
                    required
                    requiredMessage="结算运营商必须填写"
                  >
                    <Input name="settleAccount" />
                  </FormItem>

                  <FormItem label="币种：" {...formItemLayout} required>
                    <Select
                      name="currency"
                      className={styles.selectWidth}
                      dataSource={[
                        { label: '美元', value: 'usd' },
                        { label: '人民币', value: 'rmb' },
                      ]}
                    />
                  </FormItem>
                </Col>
              </Row>

              <Row className={styles.btns}>
                <Col xxs="8" s="2" l="2" className={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Form.Submit type="primary" validate onClick={this.submit}>
                    立即创建
                  </Form.Submit>
                  <Form.Reset className={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Form.Reset>
                </Col>
              </Row>
            </div>
          </Form>
        </IceContainer>
      </div>
    );
  }
}


