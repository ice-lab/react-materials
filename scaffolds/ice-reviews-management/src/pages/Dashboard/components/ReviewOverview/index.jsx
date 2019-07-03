import React from 'react';
import { Grid, Rating } from '@alifd/next';
import IceContainer from '@icedesign/container';
import Progress from './Progress';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function ReviewOverview() {
  return (
    <Row wrap gutter="20">
      <Col s="12" xxs="24">
        <IceContainer className={styles.container} title="评价概览">
          <div className={styles.overviewData}>
            388 <span className={styles.overviewDataUnit}>分</span>
          </div>
          <div className={styles.overviewDataDetail}>
            <div>
              <div className={styles.overviewDataDetailCount}>+21.8%</div>
              <div className={styles.overviewDataDetailDesc}>
                好评环比增长比例
              </div>
            </div>
            <div>
              <div className={styles.overviewDataDetailCount}>+10.2%</div>
              <div className={styles.overviewDataDetailDesc}>
                好评同比增长比例
              </div>
            </div>
            <div>
              <div className={styles.overviewDataDetailCount}>+52</div>
              <div className={styles.overviewDataDetailDesc}>
                好评环比增长数量
              </div>
            </div>
          </div>
          <div className={styles.overviewDataExtraLinks}>
            <div className={styles.overviewDataExtraLinksTitle}>扩展链接</div>
            <div className={styles.overviewDataExtraLinksWrapper}>
              <a className={styles.overviewDataExtraLink} href="" target="_blank">
                微博
              </a>
              <a className={styles.overviewDataExtraLink} href="" target="_blank">
                知乎
              </a>
              <a className={styles.overviewDataExtraLink} href="" target="_blank">
                头条
              </a>
            </div>
          </div>
        </IceContainer>
      </Col>
      <Col s="12" xxs="24">
        <IceContainer className={styles.container} title="评分概览">
          <div className={styles.overviewRatingWrapper}>
            <span className={styles.overviewRatingCount}>4.5</span>
            <span className={styles.overviewRating}>
              <Rating value={4.5} disabled />
            </span>
          </div>
          <div className={styles.overviewDetail}>
            <div className={styles.overviewDetailItem}>
              <span className={styles.overviewDetailItemText}>5 星</span>
              <span className={styles.overviewDetailItemPercentWrapper}>
                <Progress
                  className={styles.overviewDetailItemPercent}
                  color="#447eff"
                  percent={90}
                  extra="480"
                />
              </span>
            </div>
            <div className={styles.overviewDetailItem}>
              <span className={styles.overviewDetailItemText}>4 星</span>
              <span className={styles.overviewDetailItemPercentWrapper}>
                <Progress
                  className={styles.overviewDetailItemPercent}
                  color="#f7da47"
                  percent={70}
                  extra="270"
                />
              </span>
            </div>
            <div className={styles.overviewDetailItem}>
              <span className={styles.overviewDetailItemText}>3 星</span>
              <span className={styles.overviewDetailItemPercentWrapper}>
                <Progress
                  className={styles.overviewDetailItemPercent}
                  color="#58ca9a"
                  percent={50}
                  extra="90"
                />
              </span>
            </div>
            <div className={styles.overviewDetailItem}>
              <span className={styles.overviewDetailItemText}>2 星</span>
              <span className={styles.overviewDetailItemPercentWrapper}>
                <Progress
                  className={styles.overviewDetailItemPercent}
                  color="#ee706d"
                  percent={40}
                  extra="80"
                />
              </span>
            </div>
            <div className={styles.overviewDetailItem}>
              <span className={styles.overviewDetailItemText}>1 星</span>
              <span className={styles.overviewDetailItemPercentWrapper}>
                <Progress
                  className={styles.overviewDetailItemPercent}
                  color="#999"
                  percent={30}
                  extra="60"
                />
              </span>
            </div>
          </div>
        </IceContainer>
      </Col>
    </Row>
  );
}
