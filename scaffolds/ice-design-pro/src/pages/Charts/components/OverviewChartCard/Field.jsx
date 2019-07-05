import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function Field(props) {
  const { label, value } = props;
  return (
    <div className={styles.field}>
      <span>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
