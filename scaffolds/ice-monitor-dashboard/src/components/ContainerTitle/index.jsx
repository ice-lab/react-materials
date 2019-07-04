import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const ContainerTitle = ({ title, style, ...props }) => {
  return (
    <h3 {...props} className={`${styles.title} ${style}`}>
      {title}
    </h3>
  );
};

ContainerTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContainerTitle;
