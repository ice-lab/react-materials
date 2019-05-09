/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

export default class Head extends Component {
  static displayName = 'Head';

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    total: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, content, total } = this.props;
    return (
      <div className={styles.metaWrap}>
        <div className={styles.meta}>
          <span className={styles.title}>{title}</span>
          <span className={styles.action}>
            <Balloon
              trigger={<Icon type="help" size="xs" className={styles.promptIcon} />}
              align="t"
              closable={false}
              triggerType="hover"
              className={styles.newHover }
            >
              {content}
            </Balloon>
          </span>
        </div>
        <div className={styles.total}>{total}</div>
      </div>
    );
  }
}


