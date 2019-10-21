import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function Exception(props) {
  const { statusCode, description, image, backText, redirect } = props;

  return (
    <IceContainer>
      <div className={styles.exceptionContent}>
        <img src={image} className={styles.exceptionImage} alt="页面不存在" />
        <div className="exception-prompt">
          <h1 className={styles.statuscode}>{statusCode}</h1>
          <div className={styles.description}>{description}</div>
          <Button type="primary">
            <Link to={redirect} className={styles.backText}>
              {backText}
            </Link>
          </Button>
        </div>
      </div>
    </IceContainer>
  );
}

Exception.defaultProps = {
  statusCode: '400',
  description: '抱歉，你访问的页面不存在',
  image: 'https://img.alicdn.com/tfs/TB1ODH2GAvoK1RjSZPfXXXPKFXa-780-780.png',
  backText: '返回首页',
  redirect: '/',
};

Exception.propTypes = {
  statusCode: PropTypes.string,
  description: PropTypes.element,
  image: PropTypes.string,
  backText: PropTypes.string,
  redirect: PropTypes.string,
};
