import React, { Component } from 'react';
import { Button, Input, Select } from '@alifd/next';
import styles from './index.module.scss';
export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.tableFilter}>
        <div className={styles.title}>权限管理</div>
        <div className={styles.filter}>
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>名称：</span>
            <Input />
          </div>
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>角色：</span>
            <Select className={styles.selectWidth}>
              <Select.Option value="all">全部</Select.Option>
              <Select.Option value="admin">管理员</Select.Option>
              <Select.Option value="dbo">运营</Select.Option>
            </Select>
          </div>
          <div className={styles.filterItem}>
            <span className={styles.filterLabel}>状态：</span>
            <Select className={styles.selectWidth}>
              <Select.Option value="all">全部</Select.Option>
              <Select.Option value="checked">已审核</Select.Option>
              <Select.Option value="unCheck">未审核</Select.Option>
            </Select>
          </div>
          <Button type="primary" className={styles.submitButton}>
            查询
          </Button>
        </div>
      </div>
    );
  }
}

// const styles = {
//   tableFilter: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '20px',
//     marginBottom: '20px',
//     background: '#fff',
//   },
//   title: {
//     height: '20px',
//     lineHeight: '20px',
//     color: '#333',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     paddingLeft: '12px',
//     borderLeft: '4px solid #666',
//   },
//   filter: {
//     display: 'flex',
//   },
//   filterItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginLeft: '20px',
//   },
//   filterLabel: {
//     fontWeight: '500',
//     color: '#999',
//   },
//   submitButton: {
//     marginLeft: '20px',
//   },
// };
