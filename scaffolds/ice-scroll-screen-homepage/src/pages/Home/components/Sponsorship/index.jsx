import React from 'react';
import { Grid } from '@alifd/next';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

import Summary from '../Summary';
import styles from './index.module.scss';

const ScrollOverPack = ScrollAnim.OverPack;
const { Row, Col } = Grid;

const MOCK_DATA = [
  require('./images/TB1P0HTA7yWBuNjy0FpXXassXXa-400-120.png'),
  require('./images/TB13_PSAYGYBuNjy0FoXXciBFXa-400-120.png'),
  require('./images/TB13yHEBN9YBuNjy0FfXXXIsVXa-400-120.png'),
  require('./images/TB15IrEBHGYBuNjy0FoXXciBFXa-400-120.png'),
  require('./images/TB1P0HTA7yWBuNjy0FpXXassXXa-400-120.png'),
  require('./images/TB13_PSAYGYBuNjy0FoXXciBFXa-400-120.png'),
  require('./images/TB13yHEBN9YBuNjy0FfXXXIsVXa-400-120.png'),
  require('./images/TB15IrEBHGYBuNjy0FoXXciBFXa-400-120.png'),
];

export default () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <ScrollOverPack>
        <QueueAnim delay={200} duration={1500} type="bottom">
          <Row key="row">
            <Col l="8">
              <Summary num={4} title="Sponsorship" subTitle="赞助商" />
            </Col>
            <Col l="16">
              <Row wrap>
                {MOCK_DATA.map((src, index) => {
                  return (
                    <Col l="8" key={index}>
                      <a href="#" className={styles.itemLink}>
                        <img src={src} alt="" className={styles.itemLogo} />
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  </div>
);
