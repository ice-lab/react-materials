import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Col, Row } = Grid;

export default function FormView(props) {
  const { config, data, colspanType, isShowAllData } = props;
  const { labels, rows, types = {} } = config;

  const content = rows.map((arr, index) => {
    const colSpans = colspanType[arr.length - 1];
    const cols = arr
      .map((field) => {
        if (
          !isShowAllData
          && (data[field] === null
          || data[field] === undefined
          || data[field] === '')
        ) {
          return null;
        }
        return (
          <React.Fragment key={field}>
            <Col span={colSpans[0]} className={styles.label}>
              <span>{labels[field]}</span>
            </Col>
            <Col
              offset={colSpans[2] ? colSpans[2] : 0}
              span={colSpans[1]}
              className={styles.value}
            >
              {typeof types[field] === 'function'
                ? types[field](data[field], field, data)
                : data[field]}
            </Col>
          </React.Fragment>
        );
      })
      .filter((item) => {
        return item;
      });
    if (cols.length === 0) {
      return null;
    }
    return (
      <Row align="top" key={`row-${index}`} className={styles.row}>
        {cols}
      </Row>
    );
  });

  return <div className={styles.content}>{content}</div>;
}

FormView.defaultProps = {
  colspanType: [[3, 21], [3, 9], [2, 6], [3, 3]],
  config: {},
  data: {},
  isShowAllData: true, // false的情况下，数据为空则不做展示
};

FormView.propTypes = {
  colspanType: PropTypes.arrayOf(PropTypes.array),
  config: PropTypes.shape({
    labels: PropTypes.object,
    title: PropTypes.string,
    rows: PropTypes.array,
    types: PropTypes.object,
  }),
  data: PropTypes.objectOf(PropTypes.any),
  isShowAllData: PropTypes.bool,
};
