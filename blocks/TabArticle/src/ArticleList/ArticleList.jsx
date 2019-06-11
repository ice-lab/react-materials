import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Button } from '@alifd/next';
import styles from  '../index.module.scss'

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTagClick = () => {
    // handler
  };

  renderTag = (text, onClick) => {
    return (
      <Button size="small" onClick={onClick} key={text} className={styles.button}>
        {text}
      </Button>
    );
  };

  renderItem = (data, idx) => {
    const { isMobile } = this.props;
    return (
      <div key={idx} className={styles.wrapperStyle}>
        <div  className={styles.title}>
          {data.title}
          {!isMobile && <span className={styles.datetime}>{data.datetime}</span>}
        </div>
        <div className={styles.desc}>{data.description}</div>
        <div className={styles.informationStyle}>
          <div>
            {data.tags.map((item) => {
              return this.renderTag(
                item,
                this.handleTagClick.bind(this, idx, item),
                idx
              );
            })}
          </div>
          {!isMobile && (
            <div className={styles.operator}>
              <span className={styles.operatorItem}>点赞: {data.star}</span>
              <span className={styles.operatorItem}>喜爱: {data.like}</span>
              <span className={styles.operatorItem}>评论: {data.comment}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { dataSource = [] } = this.props;
    return (
      <IceContainer>
        {dataSource.map(this.renderItem)}
        <div className={styles.paginationWrap}>
          <Pagination />
        </div>
      </IceContainer>
    );
  }
}
