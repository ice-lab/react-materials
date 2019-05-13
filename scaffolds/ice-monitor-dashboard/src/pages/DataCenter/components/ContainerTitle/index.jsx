import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

export default class ContainerTitle extends Component {
  static displayName = 'ContainerTitle';

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: '标题',
    description: '相关说明',
  };

  render() {
    const { title, description } = this.props;
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.extraIcon}>
          <Balloon
            trigger={<Icon type="help" size="xs" />}
            triggerType="hover"
            closable={false}
            align="t"
          >
            {description}
          </Balloon>
        </span>
      </div>
    );
  }
}


