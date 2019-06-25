import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import { injectIntl, FormattedMessage } from 'react-intl';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default injectIntl((props) => {
  const {
    intl: { formatMessage },
  } = props;
  // 渲染详情信息的数据
  const dataSource = {
    title: formatMessage({ id: 'app.profile.basic.task.value' }),
    shopName: formatMessage({ id: 'app.profile.basic.shop.value' }),
    amount: formatMessage({ id: 'app.profile.basic.amount.value' }),
    bounty: formatMessage({ id: 'app.profile.basic.reward.value' }),
    orderTime: formatMessage({ id: 'app.profile.basic.ordertime.value' }),
    deliveryTime: formatMessage({
      id: 'app.profile.basic.deliverytime.value',
    }),
    phone: formatMessage({ id: 'app.profile.basic.contact.value' }),
    address: formatMessage({ id: 'app.profile.basic.address.value' }),
    status: formatMessage({ id: 'app.profile.basic.status.value' }),
    remark: formatMessage({ id: 'app.profile.basic.note.value' }),
    pics: [
      require('./images/img4.jpg'),
      require('./images/img3.jpg'),
      require('./images/img2.jpg'),
      require('./images/img1.jpg'),
    ],
  };

  return (
    <IceContainer>
      <h2 className={styles.basicDetailTitle}>
        <FormattedMessage id="app.profile.basic.title" />
      </h2>

      <div className={styles.infoColumn}>
        <h5 className={styles.infoColumnTitle}>
          <FormattedMessage id="app.profile.basic.sub.title1" />
        </h5>
        <Row wrap className={styles.infoItems}>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.task.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.title}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.shop.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.shopName}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.amount.label" />：
            </span>
            <span className={styles.infoItemValue}>¥ {dataSource.amount}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.reward.label" />：
            </span>
            <span className={styles.infoItemValue}>¥ {dataSource.bounty}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.ordertime.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.orderTime}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.deliverytime.label" />
              ：
            </span>
            <span className={styles.infoItemValue}>
              {dataSource.deliveryTime}
            </span>
          </Col>
        </Row>
      </div>
      <div className={styles.infoColumn}>
        <h5 className={styles.infoColumnTitle}>
          <FormattedMessage id="app.profile.basic.sub.title2" />
        </h5>
        <Row wrap className={styles.infoItems}>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.contact.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.phone}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.address.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.address}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.status.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.status}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
              <FormattedMessage id="app.profile.basic.note.label" />：
            </span>
            <span className={styles.infoItemValue}>{dataSource.remark}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.attachLabel}>
              <FormattedMessage id="app.profile.basic.attachment.label" />：
            </span>
            <span>
              {dataSource.pics &&
                dataSource.pics.length &&
                dataSource.pics.map((pic, index) => {
                  return (
                    <img
                      key={index}
                      src={pic}
                      className={styles.attachPics}
                      alt="图片"
                    />
                  );
                })}
            </span>
          </Col>
        </Row>
      </div>
    </IceContainer>
  );
});
