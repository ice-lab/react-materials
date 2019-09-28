import React from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';

export default function ArticleList(props) {
  const { dataSource = [] } = props;

  const handleTagClick = (idx, text) => {
    // handler
    console.log('handleTagClick:', text);
  };

  const renderTag = (text, onClick) => {
    return (
      <Button key={text} size="small" onClick={onClick} style={styles.button}>
        {text}
      </Button>
    );
  };

  const renderItem = (data, idx, all) => {
    const isLast = all.length - 1 === idx;
    const wrapperStyle = { ...styles.item };
    const informationStyle = { ...styles.information };
    if (isLast) {
      delete wrapperStyle.borderBottom;
      wrapperStyle.marginBottom = '0px';
      informationStyle.marginBottom = '0px';
    }
    return (
      <div key={idx} style={wrapperStyle}>
        <div style={styles.title}>
          {data.title}
          <span hidden="xxs" style={styles.datetime}>
            {data.datetime}
          </span>
        </div>
        <div style={styles.desc}>{data.description}</div>
        <div style={informationStyle}>
          <div style={styles.tagList}>
            {data.tags.map((item) => {
              return renderTag(
                item,
                handleTagClick(idx, item),
                idx
              );
            })}
          </div>
          <div style={styles.operator} hidden={['xxs', 'xs']}>
            <span style={styles.operatorItem}>点赞: {data.star}</span>
            <span style={styles.operatorItem}>喜爱: {data.like}</span>
            <span style={styles.operatorItem}>评论: {data.comment}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <IceContainer className="article-list">
      {dataSource.map(renderItem)}
    </IceContainer>
  );
}

const styles = {
  item: {
    borderBottom: '1px solid #F4F4F4',
    marginBottom: '15px',
  },
  title: {
    color: '#333',
    fontSize: '16px',
    marginBottom: '15px',
    position: 'relative',
  },
  datetime: {
    position: 'absolute',
    right: '10px',
    fontSize: '12px',
    color: '#9B9B9B',
  },
  desc: {
    color: '#999',
    fontSize: '13px',
    lineHeight: '24px',
    paddingBottom: '15px',
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  button: {
    marginRight: '10px',
  },
  operator: {
    paddingTop: '8px',
    fontSize: '12px',
    color: '#9B9B9B',
  },
  operatorItem: {
    marginRight: '5px',
  },
};
