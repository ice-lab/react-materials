import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const ScrollOverPack = ScrollAnim.OverPack;

const MOCK_DATA = [
  {
    num: '1',
    title: 'Explore Future',
    subtit: '叩问未来价值',
    desc:
      '曾经，未来已来，只是分布得不均匀；而今，“数字蝶变”席卷全球各个领域。机器智能、物联网、行业大脑、区块链，你能想象的未来有多远？凡是过往，皆是序曲。此刻，即是新起点。',
  },
  {
    num: '2',
    title: 'Inclusive Value',
    subtit: '加速科技普惠',
    desc:
      '开放创新的科技，为世界带来平等的新机遇。数字金融基础设施、金融AI、智能风控，以技术创新推进金融科技生态发展，求索科技演进带来的普惠价值。',
  },
  {
    num: '3',
    title: 'Deconstruct World',
    subtit: '解构数字世界',
    desc:
      '160余场前沿技术、产品、行业等多领域多生态的主题峰会和分论坛，探索数字世界的无限可能。变革已深入社会的毛细血管，丰富而专注的垂直领域话题尽享酣畅淋漓。',
  },
  {
    num: '4',
    title: 'Unleash Thoughts',
    subtit: '遇见思想花开',
    desc:
      '院士、科学家、艺术家、行业先锋，这里有他们的创新舞台。我们很幸运生活在一个知识可以便捷分享的时代，高山仰止，心向往之。思想花开，遇见一室芬芳。',
  },
  {
    num: '5',
    title: 'Reunite Innovators',
    subtit: '同类聚变无界',
    desc:
      '上千位分享嘉宾、数万名创新创业者，再次相聚在这个一直蓬勃发展不断壮大的科技盛会之中。同样的好奇心和创新精神，让我们不断打破边界、碰撞更多可能、发现明天的价值。',
  },
];

export default class FrontierContent extends Component {
  static displayName = 'FrontierContent';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <ScrollOverPack always={false}>
          <QueueAnim type="bottom" delay={100} duration={1000}>
            <div className={styles.content} key="content">
              <Row wrap gutter={20}>
                <Col xs="24" m="12" l="8">
                  <div className={styles.titleWrap}>
                    <div className={styles.bigTitle}>FRONTIER</div>
                    <div className={styles.subTitle}>前沿内容</div>
                  </div>
                </Col>
                {MOCK_DATA.map((item, index) => {
                  return (
                    <Col xs="24" m="12" l="8" key={index}>
                      <div className={styles.item}>
                        <div className={styles.itemNum}>{item.num}</div>
                        <div className={styles.itemBox}>
                          <div className={styles.itemTitle}>{item.title}</div>
                          <div className={styles.itemSubtit}>{item.subtit}</div>
                          <div className={styles.itemDesc}>{item.desc}</div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </QueueAnim>
        </ScrollOverPack>
      </div>
    );
  }
}

