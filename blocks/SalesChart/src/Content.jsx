import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';

export default function Content(props) {
  const { data } = props;
  return (
    <div className={styles.content}>
      {data.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <p className={styles.label}>{item.label}</p>
            <h1 className={styles.amount}>{item.amount}</h1>
            <div className={styles[item.flag]}>
              <Icon
                type={`arrow-${item.flag}-filling`}
                size="xs"
                className={styles.arrowIcon}
              />
              <span className={styles.rate}>{item.rate}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Content.propTypes = {
  data: PropTypes.array.isRequired,
};
