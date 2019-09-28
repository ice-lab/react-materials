import React, { useState, useEffect } from 'react';
import { Button, Step, Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

const dataSource = () => {
  return [
    {
      condition: '校验条件',
      validate: true,
      url: require('./images/TB18NwoNFXXXXXoXXXXXXXXXXXX-132-132.png'),
      operation: '查看',
      description:
        '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
    },
    {
      condition: '校验条件',
      validate: false,
      url: require('./images/TB1VyMkNFXXXXc8XXXXXXXXXXXX-134-134.png'),
      operation: '解决方式链接',
      description:
        '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
    },
    {
      condition: '身份认证',
      validate: true,
      url: require('./images/TB1QCMfNFXXXXaOXpXXXXXXXXXX-136-136.png'),
      operation: '查看',
      description:
        '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
    },
    {
      condition: '非卖家',
      validate: false,
      url: require('./images/TB1mGnSNFXXXXbMaXXXXXXXXXXX-134-136.png'),
      operation: '解决方式链接',
      description:
        '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
    },
    {
      condition: '18岁以上',
      validate: false,
      url: require('./images/TB1xwQiNFXXXXcfXXXXXXXXXXXX-136-134.png'),
      operation: '解决方式链接',
      description:
        '说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案说明以及解决方案',
    },
  ];
};

const { Row, Col } = Grid;

export default function Index() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  const data = dataSource();
  return (
    <div className="application-progress">
      <IceContainer>
        <Step current={0} shape={isMobile ? 'dot' : 'circle'}>
          <Step.Item title="检测账号" />
          <Step.Item title="选择入住类型" />
          <Step.Item title="填写详细资料" />
          <Step.Item title="完成" />
        </Step>
        <div>
          {data.map((item, index) => {
            return (
              <div className={styles.row} key={index}>
                <Row wrap>
                  <Col xxs="24" s="4">
                    <div className={styles.imageWrap}>
                      <img
                        className={styles.image}
                        src={item.url}
                        alt="condition"
                      />
                      <br />
                      <span>{item.condition}</span>
                    </div>
                  </Col>
                  <Col
                    xxs="24"
                    s="16"
                    className={`${styles.itemBody} ${isMobile && styles.mobileContentCenter}`}
                  >
                    <span
                      className={
                        item.validate
                          ? styles.itemStatusSuccess
                          : styles.itemStatusFail
                      }
                    >
                      <Icon type={item.validate ? 'success' : 'error'} />
                      <span className={styles.itemStatusText}>
                        {item.validate ? '符合文案' : '不符合文案'}
                      </span>
                    </span>
                    <div
                      className={`${styles.itemDescription} ${(isMobile && styles.removeContentWidth)}`}
                    >
                      {item.description}
                    </div>
                  </Col>
                  <Col xxs="24" s="4">
                    <div className={styles.operationWrap}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.operation}
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
        <div className={styles.itemFooter}>
          <p>亲，您需要通过全部校验条件，才可以开通账号！</p>
          <Button className={styles.nextBtn} size="large" disabled>
            下一步
          </Button>
        </div>
      </IceContainer>
    </div>
  );
}
