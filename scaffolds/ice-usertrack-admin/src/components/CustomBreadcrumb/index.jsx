import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from '@alifd/next';

import styles from './index.module.scss';

export default function CustomBreadcrumb({ title, items, summary }) {
  return (
    <div className={styles.container}>
      <Breadcrumb className={styles.breadcrumb}>
        {items.map((item, index) => {
          const link = item.link ? { link: item.link } : {};
          return (
            <Breadcrumb.Item key={index} {...link}>
              {item.text}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      <h3 className={styles.title}>{title}</h3>
      {summary && <p className={styles.summary}>{summary}</p>}
    </div>
  );
}

CustomBreadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
