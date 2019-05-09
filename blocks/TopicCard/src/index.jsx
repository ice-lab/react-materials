import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import './index.modules.scss'

const dataSource = [
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1nQ4hgILJ8KJjy0FnXXcFDpXa-132-126.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1OuuTgL6H8KJjy0FjXXaXepXa-132-126.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1aTaIgRTH8KJjy0FiXXcRsXXa-132-123.png',
  },
  {
    meta: '话题曝光',
    total: '56799',
    up: '100',
    down: '100',
    icon: '//img.alicdn.com/tfs/TB1dTaIgRTH8KJjy0FiXXcRsXXa-120-120.png',
  },
];

export default class TopicCard extends Component {
  static displayName = 'TopicCard';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="topic-card">
        <IceContainer title="数据概览">
          <div className="stylesitems">
            {dataSource.map((item, idx) => {
              return (
                <div
                  className="topic-card-item stylesitem"
                  key={`card-item-${idx}`}
                >
                  <div className="stylescover">
                    <img alt="icon" src={item.icon} className="stylesicon" />
                  </div>
                  <div>
                    <div className="stylesmeta">{item.meta}</div>
                    <div className="stylestotal">{item.total}</div>
                    <div className="stylescompareText">
                      较前日 <span className="stylesup"> ↑ +{item.up}</span>
                    </div>
                    <div className="stylescompareText">
                      近7天 <span className="stylesdown"> ↓ -{item.down}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}
