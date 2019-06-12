import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const PageHead = ({ title, style, ...props }) => {
  return (
    <div className={styles.container }
    style = {{style}}>
      <h3 className={styles.title}>{title}</h3>
      {props.buttonText ? (
        <Button type="primary" onClick={props.onClick}>
          {props.buttonText}
        </Button>
      ) : null}
    </div>
  );
};



PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

PageHead.defaultProps = {
  buttonText: '',
};

export default PageHead;
