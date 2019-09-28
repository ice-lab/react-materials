import React from 'react';
import { Button } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function TopBar(props) {
  const {
    title,
    buttonText,
    extraBefore,
    extraAfter,
    onClick,
  } = props;

  return (
    <div className={styles.container}>
      {extraBefore || <div className={styles.title}>{title || ''}</div>}

      {extraAfter || (
        <div className={styles.buttons}>
          {buttonText ? (
            <Button type="primary" onClick={onClick}>
              {buttonText}
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

TopBar.propTypes = {
  onClick: PropTypes.func,
  extraBefore: PropTypes.element,
  extraAfter: PropTypes.element,
};

TopBar.defaultProps = {
  onClick: () => {},
  extraAfter: null,
  extraBefore: null,
};
