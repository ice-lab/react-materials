import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import styles from  '../index.module.scss'

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  handleTagClick = (idx, text) => {
    // handler
    console.log('handleTagClick:', text);
  };

  renderTag = (text, onClick) => {
    return (
      <Button key={text} size="small" onClick={onClick} style={styles.button}>
        {text}
      </Button>
    );
  };

  renderItem = (data, idx, all) => {
    const isLast = all.length - 1 === idx;
    // if (isLast) {
    //   delete wrapperStyle.borderBottom;
    //   wrapperStyle.marginBottom = '0px';
    //   informationStyle.marginBottom = '0px';
    // }
    return (
      <div key={idx} className={isLast?styles.wrapperStyle1:styles.wrapperStyle}>
        <div className={styles.title}>
          {data.title}
          <span hidden="xxs" className={styles.datetime}>
            {data.datetime}
          </span>
        </div>
        <div className={styles.desc}>{data.description}</div>
        <div className={isLast?styles.informationStyle1:styles.informationStyle}>
          <div>
            {data.tags.map((item) => {
              return this.renderTag(
                item,
                this.handleTagClick.bind(this, idx, item),
                idx
              );
            })}
          </div>
          <div className={styles.operator} hidden={['xxs', 'xs']}>
            <span className={styles.operatorItem}>点赞: {data.star}</span>
            <span className={styles.operatorItem}>喜爱: {data.like}</span>
            <span className={styles.operatorItem}>评论: {data.comment}</span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { dataSource = [] } = this.props;
    return (
      <IceContainer className="article-list">
        {dataSource.map(this.renderItem)}
      </IceContainer>
    );
  }
}
