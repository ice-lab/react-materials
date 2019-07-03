/* eslint no-nested-ternary:0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

export default function Index({ title, style, ...props }) {
  return (
    <div style={{...style }} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {props.buttonText ? (
        <Button type="primary" size="large">
          {props.buttonText}
        </Button>
      ) : props.extraAfter ? (
        props.extraAfter
      ) : null}
    </div>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

Index.defaultProps = {
  buttonText: '',
};
