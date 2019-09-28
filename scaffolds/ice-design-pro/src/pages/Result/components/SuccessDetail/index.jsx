import React from 'react';
import IceContainer from '@icedesign/container';
import { Button, Step, Message } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import styles from './index.module.scss';

export default withRouter(injectIntl((props) => {
  function handleBackClick() {
    props.history.push('/');
  }

  function handleLinkClick() {
    Message.success('可以根据实际需求自定义查看更多');
  }

  const {
    intl: { formatMessage },
  } = props;
  const setpConfig = {
    value: [
      formatMessage({ id: 'app.result.success.step1.title' }),
      formatMessage({ id: 'app.result.success.step2.title' }),
      formatMessage({ id: 'app.result.success.step3.title' }),
      formatMessage({ id: 'app.result.success.step4.title' }),
    ],
    current: 1, // 当前步骤
    type: 'dot', // 步骤的类型，可选值: 'circle', 'arrow', 'dot'
  };
  const { value, current, type } = setpConfig;
  return (
    <IceContainer className={styles.container}>
      <div className={styles.head}>
        <img
          src={require('./images/TB1ya6gh0zJ8KJjSspkXXbF7VXa-156-156.png')}
          className={styles.img}
          alt=""
        />
        <h3 className={styles.title}>
          <FormattedMessage id="app.result.success.title" />
        </h3>
      </div>
      <p className={styles.summary}>
        <FormattedMessage id="app.result.success.summary" />
      </p>
      <p className={styles.descrpiton}>
        <FormattedMessage id="app.result.success.description" />
      </p>
      <Step current={current} shape={type} className={styles.step}>
        {value.map((item, index) => {
          return <Step.Item key={index} title={item} />;
        })}
      </Step>
      <div className={styles.buttons}>
        <Button
          type="normal"
          onClick={handleBackClick}
          style={{ marginRight: '6px' }}
        >
          <FormattedMessage id="app.result.success.back.btn1" />
        </Button>
        <Button type="primary" onClick={handleLinkClick}>
          <FormattedMessage id="app.result.success.back.btn2" />
        </Button>
      </div>
    </IceContainer>
  );
}));

