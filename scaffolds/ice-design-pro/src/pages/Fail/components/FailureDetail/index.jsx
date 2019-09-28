import React from 'react';
import { Button, Message } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function FailureDetail() {
  function handleChange() {
    Message.success('可以根据实际需求自定义返回修改');
  }

  return (
    <IceContainer className={styles.container}>
      <div className={styles.head}>
        <img
          className={styles.img}
          src={require('./images/TB1LUMhhY_I8KJjy1XaXXbsxpXa-156-156.png')}
          alt=""
        />
        <h3 className={styles.title}>
          <FormattedMessage id="app.result.fail.title" />
        </h3>
      </div>
      <p className={styles.summary}>
        <FormattedMessage id="app.result.fail.summary" />
      </p>
      <p className={styles.descrpiton}>
        <FormattedMessage id="app.result.fail.description" />
      </p>
      <Button type="primary" onClick={handleChange}>
        <FormattedMessage id="app.result.fail.back" />
      </Button>
    </IceContainer>
  );
}
