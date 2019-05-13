import React, { Component } from "react";
import { Input, Grid, Select, Button } from "@alifd/next";

import styles from "./index.module.scss";
// form binder 详细用法请参见官方文档
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder
} from "@icedesign/form-binder";

const { Row, Col } = Grid;
const { Option } = Select;

export default class Filter extends Component {
  static displayName = "Filter";

  render() {
    return (
      <IceFormBinderWrapper
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <div>
          <Row wrap>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>应用名</label>
              <IceFormBinder name="app">
                <Input />
              </IceFormBinder>
            </Col>
            <Col xxs={24} xs={12} l={8} className={styles.filterCol}>
              <label className={styles.filterTitle}>状态</label>
              <IceFormBinder name="status">
                <Select placeholder="请选择" className={styles.filterTool}>
                  <Option value="online">已上线</Option>
                  <Option value="offline">未上线</Option>
                </Select>
              </IceFormBinder>
            </Col>
            <Col>
              <div className={styles.div}>
                <Button onClick={this.props.onReset} type="normal">
                  重置
                </Button>
                <Button
                  onClick={this.props.onSubmit}
                  type="primary"
                  className={styles.btn}
                >
                  确定
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </IceFormBinderWrapper>
    );
  }
}
