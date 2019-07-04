import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '@alifd/next';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function RankList(props) {
  const { subTitle, dataSource, columns } = props;
  return (
    <div className={styles.content}>
      <h3 className={styles.subTitle}>{subTitle}</h3>
      <Table dataSource={dataSource} hasBorder={false} className={styles.table}>
        {columns.map((item) => {
          return (
            <Table.Column
              key={item.key}
              title={item.title}
              dataIndex={item.dataIndex}
            />
          );
        })}
      </Table>
      <div className={styles.footer}>
        <Link to="/user/activities" className={styles.link}>
          查看更多
        </Link>
      </div>
    </div>
  );
}

RankList.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

RankList.defaultProps = {
  columns: [],
  dataSource: [],
};
