import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import '../index.modules.scss'

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  handleTagClick = (idx, text) => {
    // handler
    console.log('handleTagClick:', text);
  };

  renderTag = (text, onClick) => {
    return (
      <Button key={text} size="small" onClick={onClick} className="stylesbutton">
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
      <div key={idx} className={isLast?"wrapperStyle1":"wrapperStyle"}>
        <div className="stylestitle">
          {data.title}
          <span hidden="xxs" className="stylesdatetime">
            {data.datetime}
          </span>
        </div>
        <div className="stylesdesc">{data.description}</div>
        <div className={isLast?"informationStyle1":"informationStyle"}>
          <div>
            {data.tags.map((item) => {
              return this.renderTag(
                item,
                this.handleTagClick.bind(this, idx, item),
                idx
              );
            })}
          </div>
          <div className="stylesoperator" hidden={['xxs', 'xs']}>
            <span className="stylesoperatorItem">点赞: {data.star}</span>
            <span className="stylesoperatorItem">喜爱: {data.like}</span>
            <span className="stylesoperatorItem">评论: {data.comment}</span>
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
