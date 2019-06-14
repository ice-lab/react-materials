import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import RankList from './RankList';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class Card extends Component {
  static displayName = 'Card';

  static propTypes = {
    content: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.array.isRequired,
    link: PropTypes.object.isRequired,
  };

  render() {
    const { title, summary, link } = this.props;
    return (
      <IceContainer className={styles.container}>
        <Row wrap>
          <Col l="18" className={styles.content}>
            <div className={styles.head}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.summary}>
                {summary.map((item, key) => {
                  return (
                    <div className={styles.item} key={key}>
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={styles.itemValue}>{item.value}</span>
                    </div>
                  );
                })}
              </div>
              <a href={link.href} className={styles.link}>
                {link.text}
              </a>
            </div>
            {this.props.content}
          </Col>
          <Col l="6">
            <RankList {...this.props} />
          </Col>
        </Row>
      </IceContainer>
    );
  }
}