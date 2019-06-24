/* eslint react/require-default-props: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Balloon } from '@alifd/next';
import styles from './index.module.scss';

export default function Head(props) {
  const { title, content, total } = props;
  return (
    <div className={styles.metaWrap}>
      <div className={styles.meta}>
        <span>{title}</span>
        <span>
          <Balloon
            trigger={<Icon type="help" size="xs" className={styles.promptIcon} />}
            align="t"
            closable={false}
            triggerType="hover"
            style={{ width: 120 }}
          >
            {content}
          </Balloon>
        </span>
      </div>
      <div className={styles.total}>{total}</div>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  total: PropTypes.string,
};
