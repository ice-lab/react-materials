import React, { Component } from 'react';
import Overivew from './components/Overivew';
import TabChart from './components/TabChart';
import EditableTable from './components/EditableTable';
import LatestActivity from './components/LatestActivity';
import ProjectAnalysis from './components/ProjectAnalysis';
import PieDoughnutChart from './components/PieDoughnutChart';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <Overivew />
        <TabChart />
        <LatestActivity />
        <ProjectAnalysis />
        <EditableTable />
        <PieDoughnutChart />
      </div>
    );
  }
}
