import React from 'react';
import { Input, Grid, Select, Button } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Row, Col } = Grid;
const { Option } = Select;

export default function Filter(props) {
  return (
    <IceFormBinderWrapper
      value={props.value}
      onChange={props.onChange}
    >
      <div>
        <Row wrap>
          <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
            <label style={styles.filterTitle}>应用名</label>
            <IceFormBinder name="app">
              <Input />
            </IceFormBinder>
          </Col>
          <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
            <label style={styles.filterTitle}>状态</label>
            <IceFormBinder name="status">
              <Select
                placeholder="请选择"
                style={styles.filterTool}
              >
                <Option value="online">已上线</Option>
                <Option value="offline">未上线</Option>
              </Select>
            </IceFormBinder>
          </Col>
          <Col>
            <div
              style={{
                textAlign: 'left',
                marginLeft: '12px',
              }}
            >
              <Button onClick={props.onReset} type="normal">
                重置
              </Button>
              <Button
                onClick={props.onSubmit}
                type="primary"
                style={{ marginLeft: '10px' }}
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

const styles = {
  filterCol: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },

  filterTitle: {
    width: '68px',
    textAlign: 'right',
    marginRight: '12px',
    fontSize: '14px',
  },

  filterTool: {
    width: '200px',
  },
};
