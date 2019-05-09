import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker } from '@alifd/next';
import styles from '../index.module.scss';
// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;

export default class Filter extends Component {
  static displayName = 'Filter';

  render() {
    return (
      <IceFormBinderWrapper
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <div>
          <Row wrap>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>所属应用</label>
              <IceFormBinder name="app">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>分类ID</label>
              <IceFormBinder name="id">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>标签ID</label>
              <IceFormBinder name="tag">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>开始时间</label>
              <IceFormBinder
                name="startTime"
                valueFormatter={(date, strValue) => {
                  return strValue;
                }}
              >
                <DatePicker className={styles.filterTool} />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>结束时间</label>
              <IceFormBinder
                name="endTime"
                valueFormatter={(date, strValue) => {
                  return strValue;
                }}
              >
                <DatePicker className={styles.filterTool} />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>尺寸</label>
              <IceFormBinder name="size">
                <Select placeholder="请选择" className={styles.filterTool}>
                  <Option value="small">Small</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="large">Large</Option>
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>删除状态</label>
              <IceFormBinder name="status">
                <Select className={styles.filterTool}>
                  <Option value="success">成功</Option>
                  <Option value="failed">失败</Option>
                </Select>
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>讨论ID</label>
              <IceFormBinder name="commentId">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>置顶</label>
              <IceFormBinder name="isStick">
                <Select placeholder="请选择" className={styles.filterTool}>
                  <Option value="all">不限</Option>
                  <Option value="stick">置顶</Option>
                  <Option value="not-stick">不置顶</Option>
                </Select>
              </IceFormBinder>
            </Col>
          </Row>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '12px',
            }}
          >
            <Button onClick={this.props.onReset} type="normal">
              重置
            </Button>
            <Button
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              确定
            </Button>
          </div>
        </div>
      </IceFormBinderWrapper>
    );
  }
}