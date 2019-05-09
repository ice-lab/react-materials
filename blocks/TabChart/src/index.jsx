import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';

const TabPane = Tab.Item;

export default class TabChart extends Component {
  static displayName = 'TabChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (key) => {
    console.log('change', key);
  };

  render() {
    return (
      <div className="tab-chart" className="stylescontainer">
        <IceContainer className="stylescard">
          <Tab onChange={this.handleChange}>
            <TabPane key="1" title="收益走势">
              <SeriesLine />
            </TabPane>
            <TabPane key="2" title="成交趋势">
              <BasicLine />
            </TabPane>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

