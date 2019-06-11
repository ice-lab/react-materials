import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss'

const ContainerTitle = ({ title, style, ...props }) => {
  return (
    <div style={{ ...style }} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {props.buttonText ? (
        <Button type="primary" size="large">
          {props.buttonText}
        </Button>
      ) : null}
    </div>
  );
};

ContainerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

ContainerTitle.defaultProps = {
  buttonText: '',
};

export default ContainerTitle;
