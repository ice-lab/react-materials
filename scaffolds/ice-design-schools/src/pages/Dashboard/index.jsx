import React, { Component } from '_react@16.8.6@react';
import QuickNavigation from './components/QuickNavigation';
import OverviewChart from './components/OverviewChart';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <QuickNavigation />
        <OverviewChart />
      </div>
    );
  }
}
