import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import '../index.modules.scss'

export default class Filter extends Component {
  render() {
    return (
      <IceContainer >
        <div className="stylescategory">
          <span className="styleslabel">所属类目：</span>
          <span className="stylesitem">全部</span>
          <span className="stylesitem">类目一</span>
          <span className="stylesitem">类目二</span>
          <span className="stylesitem">类目三</span>
          <span className="stylesitem">类目四</span>
        </div>
        <div className="stylesothers">
          <span className="styleslabel">其它筛选：</span>
          <span className="stylesitem">全部</span>
          <span className="stylesitem">类目一</span>
          <span className="stylesitem">类目二</span>
          <span className="stylesitem">类目三</span>
          <span className="stylesitem">类目四</span>
        </div>
      </IceContainer>
    );
  }
}

