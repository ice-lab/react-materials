import React from 'react';
import { Button, Icon } from '@alifd/next';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function TopBar(props) {
  const { title, buttonText, extraBefore, extraAfter } = props;

  return (
    <div className={styles.container}>
      {extraBefore || <div className={styles.title}>{title || ''}</div>}

      {extraAfter || (
      <div className={styles.buttons}>
        <Button iconSize="xs" type="primary">
          <Icon type="add" className={styles.addIcon} />
          {buttonText}
        </Button>
      </div>
      )}
    </div>
  );
}

TopBar.propTypes = {
  extraBefore: PropTypes.element,
  extraAfter: PropTypes.element,
};

TopBar.defaultProps = {
  extraAfter: null,
  extraBefore: null,
};
