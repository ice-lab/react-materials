import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

export default function ContainerTitle({ title, style, onClick, buttonText }) {
  return (
    <div className={styles.container}
      style={{ ...style }}
    >
      <h3 className={styles.title}>
        {title}
      </h3>
      {buttonText ? (
        <Button type="primary" onClick={onClick}>
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
}


ContainerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

ContainerTitle.defaultProps = {
  buttonText: '',
};
