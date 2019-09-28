import React from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import { Link } from 'react-router-dom';

import RankList from './RankList';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Card(props) {
  const { title, summary, link, content } = props;
  return (
    <IceContainer className={styles.container}>
      <Row>
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
            <Link to={link.to} className={styles.link}>
              {link.text}
            </Link>
          </div>
          {content}
        </Col>
        <Col l="6">
          <RankList {...props} />
        </Col>
      </Row>
    </IceContainer>
  );
}

Card.propTypes = {
  content: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.array.isRequired,
  link: PropTypes.object.isRequired,
};
