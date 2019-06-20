import React from 'react';
import OverviewPieChart from './components/OverviewPieChart';
import BizchartsBarBasicColumn from './components/BizchartsBarBasicColumn';
import BizchartsLineCurved from './components/BizchartsLineCurved';
import BizchartsOtherBubbleImage from './components/BizchartsOtherBubbleImage';
import { withAuth } from '@/components/Auth';

function BasicCharts() {
  return (
    <div>
      <OverviewPieChart />
      <BizchartsBarBasicColumn />
      <BizchartsLineCurved />
      <BizchartsOtherBubbleImage />
    </div>
  );
}

export default withAuth({
  authorities: ['admin', 'user'],
})(BasicCharts);
