import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Overview() {
  return (
    <IceContainer title="资源概览">
      <Row wrap gutter="20">
        <Col l="5">
          <div className={styles.box}>
            <div className={styles.boxtitle}>
              <span className={styles.boxicon}>
                <Icon className={styles.icon} type="upload" size="xs" />
              </span>
              <span>线上主机</span>
            </div>
            <div className={styles.boxcontent}>
              <div>
                <span className={styles.boxvalue}>72</span>
                <span className={styles.boxlabel}>台</span>
              </div>
              <div className={styles.boxkey}>DOCKER</div>
            </div>
          </div>
        </Col>
        <Col l="8">
          <div className={styles.box}>
            <div className={styles.boxtitle}>
              <span className={styles.boxicon2}>
                <Icon className={styles.icon} type="download" size="xs" />
              </span>
              <span>主机预算</span>
            </div>
            <div className={styles.boxlist}>
              <div className={styles.boxcontent}>
                <div>
                  <span className={styles.boxvalue}>100</span>
                  <span className={styles.boxlabel}>台</span>
                </div>
                <div className={styles.boxkey}>总预算</div>
              </div>
              <div className={styles.boxcontent}>
                <div>
                  <span className={styles.boxvalue}>72</span>
                  <span className={styles.boxlabel}>台</span>
                </div>
                <div className={styles.boxkey}>已用</div>
              </div>
              <div className={styles.boxcontent}>
                <div>
                  <span className={styles.boxvalue}>28</span>
                  <span className={styles.boxlabel}>台</span>
                </div>
                <div className={styles.boxkey}>剩余</div>
              </div>
            </div>
          </div>
        </Col>
        <Col l="5">
          <div className={styles.box}>
            <div className={styles.boxtitle}>
              <span className={styles.boxicon3}>
                <Icon className={styles.icon} type="refresh" size="xs" />
              </span>
              <span>应用基线</span>
            </div>
            <div className={styles.boxcontent}>
              <div>
                <span className={styles.boxvalue}>4核 8G 60G</span>
              </div>
              <div className={styles.boxkey}>机型</div>
            </div>
          </div>
        </Col>
        <Col l="6">
          <div className={styles.box}>
            <div className={styles.boxtitle}>
              <span className={styles.boxicon4}>
                <Icon className={styles.icon} type="attachment" size="xs" />
              </span>
              <span>负载均衡</span>
            </div>
            <div className={styles.boxlist}>
              <div className={styles.boxcontent}>
                <div>
                  <span className={styles.boxvalue}>0</span>
                  <span className={styles.boxlabel}>个</span>
                </div>
                <div className={styles.boxkey}>Load Balancer 01</div>
              </div>
              <div className={styles.boxcontent}>
                <div>
                  <span className={styles.boxvalue}>11</span>
                  <span className={styles.boxlabel}>个</span>
                </div>
                <div className={styles.boxkey}>Load Balancer 02</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </IceContainer>
  );
};
