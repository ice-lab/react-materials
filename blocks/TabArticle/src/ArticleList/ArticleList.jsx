import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Button } from '@alifd/next';
import './ArticleList.scss';
import '../index.modules.scss'

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
      <Button size="small" onClick={onClick} key={text} className="stylesbutton">
        {text}
      </Button>
    );
  };

  renderItem = (data, idx) => {
    const { isMobile } = this.props;
    return (
      <div key={idx} className="wrapperStyle">
        <div className="stylestitle">
          {data.title}
          {!isMobile && <span className="stylesdatetime">{data.datetime}</span>}
        </div>
        <div className="stylesdesc">{data.description}</div>
        <div className="informationStyle">
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
            <div className="stylesoperator">
              <span className="stylesoperatorItem">点赞: {data.star}</span>
              <span className="stylesoperatorItem">喜爱: {data.like}</span>
              <span className="stylesoperatorItem">评论: {data.comment}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { dataSource = [] } = this.props;
    return (
      <IceContainer className="article-list">
        {dataSource.map(this.renderItem)}
        <div className="stylespaginationWrap">
          <Pagination />
        </div>
      </IceContainer>
    );
  }
}
