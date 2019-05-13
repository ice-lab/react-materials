import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from '@alifd/next';
import styles from './index.module.scss';

export default class CustomBreadcrumb extends Component {
  static displayName = 'CustomBreadcrumb';

  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    const { title, items, summary } = this.props;
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
}