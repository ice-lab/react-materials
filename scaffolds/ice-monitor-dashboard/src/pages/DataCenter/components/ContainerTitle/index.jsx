import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Balloon } from '@alifd/next';

import styles from './index.module.scss';

export default function ContainerTitle(props) {
  const { title, description } = props;
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

ContainerTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ContainerTitle.defaultProps = {
  title: '标题',
  description: '相关说明',
};
