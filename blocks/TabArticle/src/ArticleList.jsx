import React from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Button } from '@alifd/next';

export default function ArticleList(props) {
  const { isMobile, dataSource = [] } = props;

  const handleTagClick = () => {
    // handler
  };

  const renderTag = (text, onClick) => {
    return (
      <Button size="small" onClick={onClick} key={text} style={styles.button}>
        {text}
      </Button>
    );
  };

  const renderItem = (data, idx) => {
    const wrapperStyle = { ...styles.item };
    const informationStyle = { ...styles.information };
    return (
      <div key={idx} style={wrapperStyle}>
        <div style={styles.title}>
          {data.title}
          {!isMobile && <span style={styles.datetime}>{data.datetime}</span>}
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
          {!isMobile && (
            <div style={styles.operator}>
              <span style={styles.operatorItem}>点赞: {data.star}</span>
              <span style={styles.operatorItem}>喜爱: {data.like}</span>
              <span style={styles.operatorItem}>评论: {data.comment}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <IceContainer className="article-list">
      {dataSource.map(renderItem)}
      <div style={styles.paginationWrap}>
        <Pagination />
      </div>
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
  paginationWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '15px',
  },
};
